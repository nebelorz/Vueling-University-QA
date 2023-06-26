/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 89.36426634528472, "KoPercent": 10.635733654715276};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.8923370493120418, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.8921686746987951, 500, 1500, "pokeapi.co/api/v2/evolution-trigger/4"], "isController": false}, {"data": [0.8936106088004823, 500, 1500, "pokeapi.co/api/v2/evolution-trigger/8"], "isController": false}, {"data": [0.891500904159132, 500, 1500, "pokeapi.co/api/v2/evolution-trigger/6"], "isController": false}, {"data": [0.8939119951778179, 500, 1500, "pokeapi.co/api/v2/evolution-chain/7"], "isController": false}, {"data": [0.8912650602409639, 500, 1500, "pokeapi.co/api/v2/evolution-chain/5"], "isController": false}, {"data": [0.891566265060241, 500, 1500, "pokeapi.co/api/v2/evolution-chain/3"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 9957, 1059, 10.635733654715276, 131.6354323591445, 0, 23632, 24.0, 39.0, 54.0, 224.36000000000058, 33.1865707210255, 63.44747045409474, 4.981425356879789], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["pokeapi.co/api/v2/evolution-trigger/4", 1660, 177, 10.662650602409638, 33.71626506024094, 0, 14205, 23.0, 34.0, 42.0, 84.18999999999733, 5.5375603377244635, 8.87313057821637, 0.8357909819078563], "isController": false}, {"data": ["pokeapi.co/api/v2/evolution-trigger/8", 1659, 174, 10.488245931283906, 55.07775768535264, 0, 19216, 23.0, 34.0, 44.0, 83.20000000000027, 5.533375358968971, 7.95767970545366, 0.8367897386155555], "isController": false}, {"data": ["pokeapi.co/api/v2/evolution-trigger/6", 1659, 180, 10.849909584086799, 47.85051235684146, 0, 19216, 23.0, 33.0, 42.0, 83.60000000000218, 5.535720244252395, 7.945811583427876, 0.8337619446344556], "isController": false}, {"data": ["pokeapi.co/api/v2/evolution-chain/7", 1659, 173, 10.427968655816757, 216.84086799276682, 0, 19244, 24.0, 47.0, 77.0, 11613.200000000446, 5.53103245939242, 12.432017908968007, 0.8273224022650895], "isController": false}, {"data": ["pokeapi.co/api/v2/evolution-chain/5", 1660, 178, 10.72289156626506, 193.6722891566265, 0, 19239, 24.0, 46.0, 76.94999999999982, 459.4999999999809, 5.532780055327801, 13.178730955029499, 0.8248589203579643], "isController": false}, {"data": ["pokeapi.co/api/v2/evolution-chain/3", 1660, 177, 10.662650602409638, 242.6096385542166, 0, 23632, 24.0, 47.0, 79.0, 19173.78, 5.535196849606034, 13.091904352590372, 0.8257760581479098], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 650, 61.37865911237016, 6.528070704027318], "isController": false}, {"data": ["Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 363, 34.27762039660057, 3.645676408556794], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 46, 4.343720491029273, 0.461986542131164], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 9957, 1059, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 650, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 363, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 46, "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["pokeapi.co/api/v2/evolution-trigger/4", 1660, 177, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 114, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 63, "", "", "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/evolution-trigger/8", 1659, 174, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 113, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 60, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 1, "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/evolution-trigger/6", 1659, 180, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 113, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 65, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 2, "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/evolution-chain/7", 1659, 173, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 103, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 56, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 14, "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/evolution-chain/5", 1660, 178, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 105, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 60, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 13, "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/evolution-chain/3", 1660, 177, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 102, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 59, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 16, "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});

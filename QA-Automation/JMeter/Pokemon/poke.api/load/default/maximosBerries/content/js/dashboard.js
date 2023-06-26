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

    var data = {"OkPercent": 95.42092286016202, "KoPercent": 4.579077139837971};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.953786544557943, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9537389100126743, 500, 1500, "pokeapi.co/api/v2/berry-firmness/very-soft"], "isController": false}, {"data": [0.9543147208121827, 500, 1500, "pokeapi.co/api/v2/berry-flavor/sweet"], "isController": false}, {"data": [0.9540266328471781, 500, 1500, "pokeapi.co/api/v2/berry/razz"], "isController": false}, {"data": [0.9508871989860583, 500, 1500, "pokeapi.co/api/v2/berry/pinap"], "isController": false}, {"data": [0.9543726235741445, 500, 1500, "pokeapi.co/api/v2/berry/iapapa"], "isController": false}, {"data": [0.9543436905516804, 500, 1500, "pokeapi.co/api/v2/berry-firmness/hard"], "isController": false}, {"data": [0.9543436905516804, 500, 1500, "pokeapi.co/api/v2/berry-flavor/spicy"], "isController": false}, {"data": [0.9543147208121827, 500, 1500, "pokeapi.co/api/v2/berry-firmness/super-hard"], "isController": false}, {"data": [0.9537389100126743, 500, 1500, "pokeapi.co/api/v2/berry-flavor/dry"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 14195, 650, 4.579077139837971, 96.45868263473083, 0, 24785, 24.0, 37.0, 50.0, 101.03999999999905, 47.31256624425883, 129.74479711758315, 7.538978783297114], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["pokeapi.co/api/v2/berry-firmness/very-soft", 1578, 73, 4.6261089987325725, 37.769328263624814, 0, 19200, 24.0, 35.0, 47.0, 61.0, 5.265159856659526, 11.41440226004818, 0.8728931957485001], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/sweet", 1576, 72, 4.568527918781726, 25.866116751269015, 0, 322, 24.0, 34.0, 45.149999999999864, 63.0, 5.259574695305095, 20.689043185413357, 0.8430837927674173], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/razz", 1577, 72, 4.56563094483196, 242.49524413443234, 0, 22775, 24.0, 48.0, 77.0, 19185.0, 5.257455284959411, 10.04912130048674, 0.8035710564918072], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/pinap", 1578, 72, 4.562737642585551, 229.6381495564006, 0, 19232, 24.0, 48.0, 76.0, 19175.52, 5.262227676383002, 9.974707652281133, 0.8092292924838181], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/iapapa", 1578, 72, 4.562737642585551, 230.54119138149562, 0, 24785, 24.0, 48.100000000000136, 72.0, 19174.99, 5.259579233661307, 9.957510690811402, 0.8137239645828334], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-firmness/hard", 1577, 72, 4.56563094483196, 25.621433100824365, 0, 249, 24.0, 35.0, 45.0, 58.0, 5.260313817580189, 13.343962100181127, 0.8481303547542964], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/spicy", 1577, 72, 4.56563094483196, 25.41407736207991, 0, 324, 24.0, 33.0, 41.0, 56.22000000000003, 5.260366457741945, 20.691125023558236, 0.8432363053681089], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-firmness/super-hard", 1576, 72, 4.568527918781726, 25.255710659898444, 0, 337, 24.0, 33.0, 43.149999999999864, 55.23000000000002, 5.259171013157938, 12.61536373082455, 0.8773280007474965], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/dry", 1578, 73, 4.6261089987325725, 25.349809885931542, 0, 324, 24.0, 34.0, 42.0, 54.0, 5.265353108994144, 21.120756623400457, 0.8336926396002603], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 600, 92.3076923076923, 4.226840436773512], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 50, 7.6923076923076925, 0.3522367030644593], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 14195, 650, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 600, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 50, "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["pokeapi.co/api/v2/berry-firmness/very-soft", 1578, 73, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 72, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 1, "", "", "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/sweet", 1576, 72, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 72, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/razz", 1577, 72, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 55, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 17, "", "", "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/pinap", 1578, 72, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 56, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 16, "", "", "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/iapapa", 1578, 72, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 56, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 16, "", "", "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-firmness/hard", 1577, 72, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 72, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/spicy", 1577, 72, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 72, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-firmness/super-hard", 1576, 72, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 72, "", "", "", "", "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/dry", 1578, 73, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 73, "", "", "", "", "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});

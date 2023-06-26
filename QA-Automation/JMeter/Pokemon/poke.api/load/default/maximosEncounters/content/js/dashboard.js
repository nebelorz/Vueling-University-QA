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

    var data = {"OkPercent": 89.12713734142305, "KoPercent": 10.872862658576944};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.8878585217870932, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.8901985111662531, 500, 1500, "pokeapi.co/api/v2/encounter-condition-value/21"], "isController": false}, {"data": [0.8913043478260869, 500, 1500, "pokeapi.co/api/v2/encounter-condition/13"], "isController": false}, {"data": [0.8877171215880894, 500, 1500, "pokeapi.co/api/v2/encounter-condition-value/22"], "isController": false}, {"data": [0.8913043478260869, 500, 1500, "pokeapi.co/api/v2/encounter-condition-value/23"], "isController": false}, {"data": [0.891439205955335, 500, 1500, "pokeapi.co/api/v2/encounter-condition/11"], "isController": false}, {"data": [0.8877171215880894, 500, 1500, "pokeapi.co/api/v2/encounter-condition/12"], "isController": false}, {"data": [0.8843052109181141, 500, 1500, "pokeapi.co/api/v2/encounter-method/1"], "isController": false}, {"data": [0.8839950372208437, 500, 1500, "pokeapi.co/api/v2/encounter-method/3"], "isController": false}, {"data": [0.8827543424317618, 500, 1500, "pokeapi.co/api/v2/encounter-method/2"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 14504, 1577, 10.872862658576944, 123.60038610038609, 0, 61554, 23.0, 33.0, 46.0, 114.0, 47.39574993709541, 75.21598498071198, 7.287863202529908], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["pokeapi.co/api/v2/encounter-condition-value/21", 1612, 175, 10.8560794044665, 105.63585607940445, 0, 56948, 23.0, 31.0, 39.0, 54.0, 5.275870420433197, 7.904134036809998, 0.8359056917706895], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition/13", 1610, 172, 10.683229813664596, 35.59006211180123, 0, 9675, 23.0, 32.0, 40.44999999999982, 67.88999999999987, 5.373939397985273, 7.24029984120176, 0.8249706269150918], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition-value/22", 1612, 180, 11.166253101736972, 40.81885856079403, 0, 19189, 23.0, 31.0, 38.0, 53.0, 5.377097301444344, 8.047876351988057, 0.8489797024583875], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition-value/23", 1610, 172, 10.683229813664596, 97.1937888198758, 0, 57307, 23.0, 31.0, 38.44999999999982, 54.88999999999987, 5.263157894736842, 7.867301150294215, 0.835508438215103], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition/11", 1612, 174, 10.794044665012407, 62.06017369727045, 0, 47680, 23.0, 31.0, 38.0, 55.0, 5.377258732207845, 10.498428827002044, 0.8244560195609462], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition/12", 1612, 179, 11.104218362282879, 55.72394540942929, 0, 24387, 23.0, 30.0, 38.0, 58.73999999999978, 5.377169047253707, 9.695627151534762, 0.8215756406236449], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-method/1", 1612, 174, 10.794044665012407, 212.33188585607962, 0, 19229, 24.0, 43.0, 74.0, 8980.58999999948, 5.376397880125005, 8.377389044046772, 0.8055893942880775], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-method/3", 1612, 173, 10.732009925558312, 269.065136476427, 0, 61554, 24.0, 43.700000000000045, 77.0, 9648.139999999998, 5.276751197252947, 8.425850464907313, 0.7912083539285937], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-method/2", 1612, 178, 11.042183622828784, 233.841811414392, 0, 19296, 24.0, 44.0, 76.0, 9639.849999999995, 5.376469607270908, 8.252802415992663, 0.8033592512298842], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 539, 34.17882054533925, 3.7162162162162162], "isController": false}, {"data": ["Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 993, 62.96766011414077, 6.84638720353006], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 45, 2.853519340519975, 0.3102592388306674], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 14504, 1577, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 993, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 539, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 45, "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["pokeapi.co/api/v2/encounter-condition-value/21", 1612, 175, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 115, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 59, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 1, "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition/13", 1610, 172, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 113, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 59, "", "", "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition-value/22", 1612, 180, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 108, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 71, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 1, "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition-value/23", 1610, 172, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 113, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 59, "", "", "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition/11", 1612, 174, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 114, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 59, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 1, "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition/12", 1612, 179, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 107, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 70, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 2, "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-method/1", 1612, 174, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 111, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 51, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 12, "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-method/3", 1612, 173, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 109, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 50, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 14, "", "", "", ""], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-method/2", 1612, 178, "Non HTTP response code: java.net.UnknownHostException/Non HTTP response message: pokeapi.co", 103, "Non HTTP response code: java.net.NoRouteToHostException/Non HTTP response message: No route to host: connect", 61, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 14, "", "", "", ""], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});

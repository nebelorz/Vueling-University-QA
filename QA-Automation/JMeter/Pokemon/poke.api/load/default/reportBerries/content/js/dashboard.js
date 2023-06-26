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

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [1.0, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "pokeapi.co/api/v2/berry-firmness/very-soft"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/berry-flavor/sweet"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/berry/razz"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/berry/pinap"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/berry/iapapa"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/berry-firmness/hard"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/berry-flavor/spicy"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/berry-firmness/super-hard"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/berry-flavor/dry"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1501, 0, 0.0, 28.092604930046594, 20, 152, 25.0, 33.0, 42.0, 135.0, 25.040872843748957, 69.40234283765973, 4.181483506973407], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["pokeapi.co/api/v2/berry-firmness/very-soft", 167, 0, 0.0, 26.425149700598798, 21, 92, 24.0, 30.0, 37.599999999999994, 83.15999999999991, 2.8022955331073596, 6.0904962118669665, 0.4871177782159278], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/sweet", 166, 0, 0.0, 25.92771084337349, 21, 57, 24.0, 30.0, 34.650000000000006, 54.99000000000004, 2.791698900137903, 11.234755232333255, 0.4689181746325384], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/razz", 167, 0, 0.0, 30.664670658682642, 21, 145, 25.0, 33.0, 52.0, 143.64, 2.797085671216816, 5.294537334603467, 0.4479707520308182], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/pinap", 167, 0, 0.0, 31.44311377245511, 21, 152, 25.0, 36.0, 57.799999999999955, 149.27999999999997, 2.7969919774900767, 5.260290617096823, 0.45068718387291273], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/iapapa", 167, 0, 0.0, 32.07784431137726, 20, 150, 25.0, 47.20000000000002, 67.59999999999988, 148.64, 2.786165935367624, 5.227058968284423, 0.45166361842873587], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-firmness/hard", 167, 0, 0.0, 26.820359281437124, 21, 92, 24.0, 32.0, 42.79999999999998, 68.19999999999976, 2.802389582494295, 7.1600653978302455, 0.4734505837612431], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/spicy", 167, 0, 0.0, 26.077844311377252, 21, 55, 25.0, 30.200000000000017, 35.599999999999994, 54.31999999999999, 2.8022485107811055, 11.276031834675727, 0.4706901795452639], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-firmness/super-hard", 166, 0, 0.0, 26.957831325301207, 21, 60, 25.0, 34.0, 40.650000000000006, 56.65000000000006, 2.7917458502211536, 6.744901595163216, 0.4880102609273305], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/dry", 167, 0, 0.0, 26.419161676646727, 21, 57, 25.0, 32.0, 34.0, 49.519999999999925, 2.8022485107811055, 11.509181113138686, 0.4652170379226445], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1501, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});

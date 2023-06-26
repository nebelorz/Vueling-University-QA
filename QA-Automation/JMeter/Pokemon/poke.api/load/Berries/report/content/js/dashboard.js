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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1501, 0, 0.0, 38.54297135243171, 20, 274, 28.0, 61.799999999999955, 95.0, 168.96000000000004, 5.0049182241042995, 13.875845840766244, 0.8357529363465098], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["pokeapi.co/api/v2/berry-firmness/very-soft", 167, 0, 0.0, 28.449101796407188, 21, 142, 25.0, 32.0, 50.39999999999995, 112.0799999999997, 0.5585826050018229, 1.213775881481816, 0.0970973668850825], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/sweet", 166, 0, 0.0, 27.771084337349407, 22, 107, 25.0, 32.0, 36.650000000000006, 98.29000000000016, 0.5568022111085396, 2.24025234502618, 0.09352537139713751], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/razz", 167, 0, 0.0, 61.437125748503014, 22, 274, 48.0, 110.20000000000002, 167.0, 216.19999999999942, 0.5579518156821212, 1.05866567347624, 0.08935947048033971], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/pinap", 167, 0, 0.0, 59.377245508982035, 24, 218, 48.0, 105.20000000000002, 139.19999999999985, 207.7999999999999, 0.5589920736932305, 1.0511435906705227, 0.09007196499939749], "isController": false}, {"data": ["pokeapi.co/api/v2/berry/iapapa", 167, 0, 0.0, 55.23353293413172, 21, 206, 44.0, 98.00000000000009, 139.39999999999995, 192.39999999999986, 0.5568448570209134, 1.0449177069995732, 0.09026977174362463], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-firmness/hard", 167, 0, 0.0, 32.04790419161678, 20, 158, 26.0, 39.400000000000034, 88.79999999999998, 148.4799999999999, 0.5582017214005182, 1.429774980153756, 0.09430556426004846], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/spicy", 167, 0, 0.0, 27.419161676646702, 20, 63, 26.0, 33.0, 38.599999999999994, 58.91999999999996, 0.558197989818736, 2.246070574442554, 0.09375981860236582], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-firmness/super-hard", 166, 0, 0.0, 27.90361445783132, 22, 104, 25.0, 35.0, 40.650000000000006, 90.60000000000025, 0.5568339628464278, 1.34468404913892, 0.09733718686475644], "isController": false}, {"data": ["pokeapi.co/api/v2/berry-flavor/dry", 167, 0, 0.0, 27.11976047904191, 21, 53, 26.0, 33.0, 35.599999999999994, 52.31999999999999, 0.5585545811509569, 2.293732634011292, 0.09272878788638933], "isController": false}]}, function(index, item){
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

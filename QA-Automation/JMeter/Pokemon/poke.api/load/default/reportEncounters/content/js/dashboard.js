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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [1.0, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "pokeapi.co/api/v2/encounter-condition-value/21"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/encounter-condition/13"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/encounter-condition-value/22"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/encounter-condition-value/23"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/encounter-condition/11"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/encounter-condition/12"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/encounter-method/1"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/encounter-method/3"], "isController": false}, {"data": [1.0, 500, 1500, "pokeapi.co/api/v2/encounter-method/2"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1503, 0, 0.0, 27.42115768463073, 20, 108, 24.0, 35.0, 44.0, 79.92000000000007, 25.0445736757036, 37.78177163177145, 4.320841161498342], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["pokeapi.co/api/v2/encounter-condition-value/21", 167, 0, 0.0, 26.305389221556887, 20, 58, 24.0, 34.0, 43.19999999999999, 56.639999999999986, 2.793529716799652, 3.943560663086934, 0.49650625825931316], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition/13", 167, 0, 0.0, 27.520958083832333, 20, 75, 25.0, 37.20000000000002, 42.19999999999999, 66.83999999999992, 2.7880730575311365, 3.4714124689054726, 0.479200056763164], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition-value/22", 167, 0, 0.0, 25.69461077844311, 20, 52, 23.0, 31.0, 37.599999999999994, 52.0, 2.7926421404682276, 3.9202615489130435, 0.49634850543478265], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition-value/23", 167, 0, 0.0, 26.02994011976048, 21, 62, 24.0, 33.0, 39.599999999999994, 57.91999999999996, 2.7879334234820785, 3.9314543475901904, 0.49551160456419757], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition/11", 167, 0, 0.0, 25.89221556886228, 21, 55, 24.0, 33.0, 37.19999999999999, 52.95999999999998, 2.793155931693121, 5.367345216093261, 0.4800736757597551], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-condition/12", 167, 0, 0.0, 26.347305389221553, 20, 57, 24.0, 34.0, 40.19999999999999, 51.559999999999945, 2.7927822466010004, 4.882747174816463, 0.4800094486345469], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-method/1", 167, 0, 0.0, 29.90419161676648, 21, 106, 25.0, 44.0, 62.79999999999998, 93.75999999999988, 2.7973199329983247, 4.12704800041876, 0.4698623324958124], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-method/3", 167, 0, 0.0, 28.922155688622748, 20, 108, 25.0, 35.0, 56.599999999999994, 105.27999999999997, 2.785561782759541, 4.229865011801108, 0.4678873306978917], "isController": false}, {"data": ["pokeapi.co/api/v2/encounter-method/2", 167, 0, 0.0, 30.173652694610787, 21, 108, 25.0, 43.0, 53.0, 105.95999999999998, 2.7904489782278143, 4.025793116196301, 0.46870822681170315], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1503, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});

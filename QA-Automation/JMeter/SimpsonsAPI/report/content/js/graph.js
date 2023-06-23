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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 283.0, "minX": 0.0, "maxY": 590.0, "series": [{"data": [[0.0, 283.0], [0.1, 284.0], [0.2, 285.0], [0.3, 285.0], [0.4, 285.0], [0.5, 286.0], [0.6, 286.0], [0.7, 286.0], [0.8, 286.0], [0.9, 286.0], [1.0, 286.0], [1.1, 286.0], [1.2, 286.0], [1.3, 287.0], [1.4, 287.0], [1.5, 287.0], [1.6, 287.0], [1.7, 287.0], [1.8, 287.0], [1.9, 287.0], [2.0, 287.0], [2.1, 287.0], [2.2, 287.0], [2.3, 287.0], [2.4, 287.0], [2.5, 287.0], [2.6, 287.0], [2.7, 288.0], [2.8, 288.0], [2.9, 288.0], [3.0, 288.0], [3.1, 288.0], [3.2, 288.0], [3.3, 288.0], [3.4, 288.0], [3.5, 288.0], [3.6, 288.0], [3.7, 288.0], [3.8, 288.0], [3.9, 288.0], [4.0, 288.0], [4.1, 288.0], [4.2, 288.0], [4.3, 288.0], [4.4, 288.0], [4.5, 288.0], [4.6, 289.0], [4.7, 289.0], [4.8, 289.0], [4.9, 289.0], [5.0, 289.0], [5.1, 289.0], [5.2, 289.0], [5.3, 289.0], [5.4, 289.0], [5.5, 289.0], [5.6, 289.0], [5.7, 289.0], [5.8, 289.0], [5.9, 289.0], [6.0, 289.0], [6.1, 289.0], [6.2, 289.0], [6.3, 289.0], [6.4, 289.0], [6.5, 289.0], [6.6, 289.0], [6.7, 289.0], [6.8, 289.0], [6.9, 289.0], [7.0, 289.0], [7.1, 289.0], [7.2, 289.0], [7.3, 289.0], [7.4, 289.0], [7.5, 289.0], [7.6, 290.0], [7.7, 290.0], [7.8, 290.0], [7.9, 290.0], [8.0, 290.0], [8.1, 290.0], [8.2, 290.0], [8.3, 290.0], [8.4, 290.0], [8.5, 290.0], [8.6, 290.0], [8.7, 290.0], [8.8, 290.0], [8.9, 290.0], [9.0, 290.0], [9.1, 290.0], [9.2, 290.0], [9.3, 290.0], [9.4, 290.0], [9.5, 290.0], [9.6, 290.0], [9.7, 290.0], [9.8, 290.0], [9.9, 290.0], [10.0, 290.0], [10.1, 290.0], [10.2, 290.0], [10.3, 290.0], [10.4, 290.0], [10.5, 290.0], [10.6, 290.0], [10.7, 290.0], [10.8, 290.0], [10.9, 290.0], [11.0, 290.0], [11.1, 290.0], [11.2, 290.0], [11.3, 290.0], [11.4, 290.0], [11.5, 291.0], [11.6, 291.0], [11.7, 291.0], [11.8, 291.0], [11.9, 291.0], [12.0, 291.0], [12.1, 291.0], [12.2, 291.0], [12.3, 291.0], [12.4, 291.0], [12.5, 291.0], [12.6, 291.0], [12.7, 291.0], [12.8, 291.0], [12.9, 291.0], [13.0, 291.0], [13.1, 291.0], [13.2, 291.0], [13.3, 291.0], [13.4, 291.0], [13.5, 291.0], [13.6, 291.0], [13.7, 291.0], [13.8, 291.0], [13.9, 291.0], [14.0, 291.0], [14.1, 291.0], [14.2, 291.0], [14.3, 291.0], [14.4, 291.0], [14.5, 291.0], [14.6, 291.0], [14.7, 291.0], [14.8, 291.0], [14.9, 291.0], [15.0, 291.0], [15.1, 291.0], [15.2, 291.0], [15.3, 291.0], [15.4, 291.0], [15.5, 291.0], [15.6, 292.0], [15.7, 292.0], [15.8, 292.0], [15.9, 292.0], [16.0, 292.0], [16.1, 292.0], [16.2, 292.0], [16.3, 292.0], [16.4, 292.0], [16.5, 292.0], [16.6, 292.0], [16.7, 292.0], [16.8, 292.0], [16.9, 292.0], [17.0, 292.0], [17.1, 292.0], [17.2, 292.0], [17.3, 292.0], [17.4, 292.0], [17.5, 292.0], [17.6, 292.0], [17.7, 292.0], [17.8, 292.0], [17.9, 292.0], [18.0, 292.0], [18.1, 292.0], [18.2, 292.0], [18.3, 292.0], [18.4, 292.0], [18.5, 292.0], [18.6, 292.0], [18.7, 292.0], [18.8, 292.0], [18.9, 292.0], [19.0, 292.0], [19.1, 292.0], [19.2, 292.0], [19.3, 292.0], [19.4, 292.0], [19.5, 292.0], [19.6, 292.0], [19.7, 292.0], [19.8, 293.0], [19.9, 293.0], [20.0, 293.0], [20.1, 293.0], [20.2, 293.0], [20.3, 293.0], [20.4, 293.0], [20.5, 293.0], [20.6, 293.0], [20.7, 293.0], [20.8, 293.0], [20.9, 293.0], [21.0, 293.0], [21.1, 293.0], [21.2, 293.0], [21.3, 293.0], [21.4, 293.0], [21.5, 293.0], [21.6, 293.0], [21.7, 293.0], [21.8, 293.0], [21.9, 293.0], [22.0, 293.0], [22.1, 293.0], [22.2, 293.0], [22.3, 293.0], [22.4, 293.0], [22.5, 293.0], [22.6, 293.0], [22.7, 293.0], [22.8, 293.0], [22.9, 293.0], [23.0, 293.0], [23.1, 293.0], [23.2, 293.0], [23.3, 293.0], [23.4, 293.0], [23.5, 293.0], [23.6, 293.0], [23.7, 293.0], [23.8, 293.0], [23.9, 293.0], [24.0, 293.0], [24.1, 293.0], [24.2, 293.0], [24.3, 293.0], [24.4, 293.0], [24.5, 293.0], [24.6, 293.0], [24.7, 293.0], [24.8, 294.0], [24.9, 294.0], [25.0, 294.0], [25.1, 294.0], [25.2, 294.0], [25.3, 294.0], [25.4, 294.0], [25.5, 294.0], [25.6, 294.0], [25.7, 294.0], [25.8, 294.0], [25.9, 294.0], [26.0, 294.0], [26.1, 294.0], [26.2, 294.0], [26.3, 294.0], [26.4, 294.0], [26.5, 294.0], [26.6, 294.0], [26.7, 294.0], [26.8, 294.0], [26.9, 294.0], [27.0, 294.0], [27.1, 294.0], [27.2, 294.0], [27.3, 294.0], [27.4, 294.0], [27.5, 294.0], [27.6, 294.0], [27.7, 294.0], [27.8, 294.0], [27.9, 294.0], [28.0, 294.0], [28.1, 294.0], [28.2, 294.0], [28.3, 294.0], [28.4, 294.0], [28.5, 294.0], [28.6, 294.0], [28.7, 294.0], [28.8, 294.0], [28.9, 294.0], [29.0, 294.0], [29.1, 294.0], [29.2, 294.0], [29.3, 294.0], [29.4, 294.0], [29.5, 294.0], [29.6, 295.0], [29.7, 295.0], [29.8, 295.0], [29.9, 295.0], [30.0, 295.0], [30.1, 295.0], [30.2, 295.0], [30.3, 295.0], [30.4, 295.0], [30.5, 295.0], [30.6, 295.0], [30.7, 295.0], [30.8, 295.0], [30.9, 295.0], [31.0, 295.0], [31.1, 295.0], [31.2, 295.0], [31.3, 295.0], [31.4, 295.0], [31.5, 295.0], [31.6, 295.0], [31.7, 295.0], [31.8, 295.0], [31.9, 295.0], [32.0, 295.0], [32.1, 295.0], [32.2, 295.0], [32.3, 295.0], [32.4, 295.0], [32.5, 295.0], [32.6, 295.0], [32.7, 295.0], [32.8, 295.0], [32.9, 295.0], [33.0, 295.0], [33.1, 295.0], [33.2, 295.0], [33.3, 295.0], [33.4, 295.0], [33.5, 295.0], [33.6, 295.0], [33.7, 295.0], [33.8, 295.0], [33.9, 295.0], [34.0, 295.0], [34.1, 295.0], [34.2, 295.0], [34.3, 295.0], [34.4, 295.0], [34.5, 296.0], [34.6, 296.0], [34.7, 296.0], [34.8, 296.0], [34.9, 296.0], [35.0, 296.0], [35.1, 296.0], [35.2, 296.0], [35.3, 296.0], [35.4, 296.0], [35.5, 296.0], [35.6, 296.0], [35.7, 296.0], [35.8, 296.0], [35.9, 296.0], [36.0, 296.0], [36.1, 296.0], [36.2, 296.0], [36.3, 296.0], [36.4, 296.0], [36.5, 296.0], [36.6, 296.0], [36.7, 296.0], [36.8, 296.0], [36.9, 296.0], [37.0, 296.0], [37.1, 296.0], [37.2, 296.0], [37.3, 296.0], [37.4, 296.0], [37.5, 296.0], [37.6, 296.0], [37.7, 296.0], [37.8, 296.0], [37.9, 296.0], [38.0, 296.0], [38.1, 296.0], [38.2, 296.0], [38.3, 296.0], [38.4, 296.0], [38.5, 296.0], [38.6, 296.0], [38.7, 296.0], [38.8, 297.0], [38.9, 297.0], [39.0, 297.0], [39.1, 297.0], [39.2, 297.0], [39.3, 297.0], [39.4, 297.0], [39.5, 297.0], [39.6, 297.0], [39.7, 297.0], [39.8, 297.0], [39.9, 297.0], [40.0, 297.0], [40.1, 297.0], [40.2, 297.0], [40.3, 297.0], [40.4, 297.0], [40.5, 297.0], [40.6, 297.0], [40.7, 297.0], [40.8, 297.0], [40.9, 297.0], [41.0, 297.0], [41.1, 297.0], [41.2, 297.0], [41.3, 297.0], [41.4, 297.0], [41.5, 297.0], [41.6, 297.0], [41.7, 297.0], [41.8, 297.0], [41.9, 297.0], [42.0, 297.0], [42.1, 297.0], [42.2, 297.0], [42.3, 297.0], [42.4, 297.0], [42.5, 297.0], [42.6, 297.0], [42.7, 297.0], [42.8, 297.0], [42.9, 297.0], [43.0, 297.0], [43.1, 298.0], [43.2, 298.0], [43.3, 298.0], [43.4, 298.0], [43.5, 298.0], [43.6, 298.0], [43.7, 298.0], [43.8, 298.0], [43.9, 298.0], [44.0, 298.0], [44.1, 298.0], [44.2, 298.0], [44.3, 298.0], [44.4, 298.0], [44.5, 298.0], [44.6, 298.0], [44.7, 298.0], [44.8, 298.0], [44.9, 298.0], [45.0, 298.0], [45.1, 298.0], [45.2, 298.0], [45.3, 298.0], [45.4, 298.0], [45.5, 298.0], [45.6, 298.0], [45.7, 298.0], [45.8, 298.0], [45.9, 298.0], [46.0, 298.0], [46.1, 298.0], [46.2, 298.0], [46.3, 298.0], [46.4, 298.0], [46.5, 298.0], [46.6, 298.0], [46.7, 298.0], [46.8, 299.0], [46.9, 299.0], [47.0, 299.0], [47.1, 299.0], [47.2, 299.0], [47.3, 299.0], [47.4, 299.0], [47.5, 299.0], [47.6, 299.0], [47.7, 299.0], [47.8, 299.0], [47.9, 299.0], [48.0, 299.0], [48.1, 299.0], [48.2, 299.0], [48.3, 299.0], [48.4, 299.0], [48.5, 299.0], [48.6, 299.0], [48.7, 299.0], [48.8, 299.0], [48.9, 299.0], [49.0, 299.0], [49.1, 299.0], [49.2, 299.0], [49.3, 299.0], [49.4, 299.0], [49.5, 299.0], [49.6, 299.0], [49.7, 299.0], [49.8, 299.0], [49.9, 299.0], [50.0, 299.0], [50.1, 299.0], [50.2, 299.0], [50.3, 300.0], [50.4, 300.0], [50.5, 300.0], [50.6, 300.0], [50.7, 300.0], [50.8, 300.0], [50.9, 300.0], [51.0, 300.0], [51.1, 300.0], [51.2, 300.0], [51.3, 300.0], [51.4, 300.0], [51.5, 300.0], [51.6, 300.0], [51.7, 300.0], [51.8, 300.0], [51.9, 300.0], [52.0, 300.0], [52.1, 300.0], [52.2, 300.0], [52.3, 300.0], [52.4, 300.0], [52.5, 300.0], [52.6, 300.0], [52.7, 300.0], [52.8, 300.0], [52.9, 300.0], [53.0, 300.0], [53.1, 300.0], [53.2, 300.0], [53.3, 300.0], [53.4, 300.0], [53.5, 300.0], [53.6, 300.0], [53.7, 300.0], [53.8, 300.0], [53.9, 300.0], [54.0, 300.0], [54.1, 301.0], [54.2, 301.0], [54.3, 301.0], [54.4, 301.0], [54.5, 301.0], [54.6, 301.0], [54.7, 301.0], [54.8, 301.0], [54.9, 301.0], [55.0, 301.0], [55.1, 301.0], [55.2, 301.0], [55.3, 301.0], [55.4, 301.0], [55.5, 301.0], [55.6, 301.0], [55.7, 301.0], [55.8, 301.0], [55.9, 301.0], [56.0, 301.0], [56.1, 301.0], [56.2, 301.0], [56.3, 301.0], [56.4, 301.0], [56.5, 301.0], [56.6, 301.0], [56.7, 301.0], [56.8, 301.0], [56.9, 301.0], [57.0, 301.0], [57.1, 301.0], [57.2, 301.0], [57.3, 301.0], [57.4, 301.0], [57.5, 301.0], [57.6, 302.0], [57.7, 302.0], [57.8, 302.0], [57.9, 302.0], [58.0, 302.0], [58.1, 302.0], [58.2, 302.0], [58.3, 302.0], [58.4, 302.0], [58.5, 302.0], [58.6, 302.0], [58.7, 302.0], [58.8, 302.0], [58.9, 302.0], [59.0, 302.0], [59.1, 302.0], [59.2, 302.0], [59.3, 302.0], [59.4, 302.0], [59.5, 302.0], [59.6, 302.0], [59.7, 302.0], [59.8, 302.0], [59.9, 302.0], [60.0, 302.0], [60.1, 302.0], [60.2, 302.0], [60.3, 302.0], [60.4, 302.0], [60.5, 302.0], [60.6, 302.0], [60.7, 302.0], [60.8, 303.0], [60.9, 303.0], [61.0, 303.0], [61.1, 303.0], [61.2, 303.0], [61.3, 303.0], [61.4, 303.0], [61.5, 303.0], [61.6, 303.0], [61.7, 303.0], [61.8, 303.0], [61.9, 303.0], [62.0, 303.0], [62.1, 303.0], [62.2, 303.0], [62.3, 303.0], [62.4, 303.0], [62.5, 303.0], [62.6, 303.0], [62.7, 303.0], [62.8, 303.0], [62.9, 303.0], [63.0, 303.0], [63.1, 303.0], [63.2, 303.0], [63.3, 303.0], [63.4, 303.0], [63.5, 303.0], [63.6, 304.0], [63.7, 304.0], [63.8, 304.0], [63.9, 304.0], [64.0, 304.0], [64.1, 304.0], [64.2, 304.0], [64.3, 304.0], [64.4, 304.0], [64.5, 304.0], [64.6, 304.0], [64.7, 304.0], [64.8, 304.0], [64.9, 304.0], [65.0, 304.0], [65.1, 304.0], [65.2, 304.0], [65.3, 304.0], [65.4, 304.0], [65.5, 304.0], [65.6, 304.0], [65.7, 304.0], [65.8, 304.0], [65.9, 304.0], [66.0, 304.0], [66.1, 304.0], [66.2, 304.0], [66.3, 305.0], [66.4, 305.0], [66.5, 305.0], [66.6, 305.0], [66.7, 305.0], [66.8, 305.0], [66.9, 305.0], [67.0, 305.0], [67.1, 305.0], [67.2, 305.0], [67.3, 305.0], [67.4, 305.0], [67.5, 305.0], [67.6, 305.0], [67.7, 305.0], [67.8, 305.0], [67.9, 305.0], [68.0, 305.0], [68.1, 305.0], [68.2, 305.0], [68.3, 305.0], [68.4, 305.0], [68.5, 305.0], [68.6, 305.0], [68.7, 305.0], [68.8, 305.0], [68.9, 305.0], [69.0, 305.0], [69.1, 306.0], [69.2, 306.0], [69.3, 306.0], [69.4, 306.0], [69.5, 306.0], [69.6, 306.0], [69.7, 306.0], [69.8, 306.0], [69.9, 306.0], [70.0, 306.0], [70.1, 306.0], [70.2, 306.0], [70.3, 306.0], [70.4, 306.0], [70.5, 306.0], [70.6, 306.0], [70.7, 306.0], [70.8, 306.0], [70.9, 306.0], [71.0, 306.0], [71.1, 306.0], [71.2, 306.0], [71.3, 306.0], [71.4, 307.0], [71.5, 307.0], [71.6, 307.0], [71.7, 307.0], [71.8, 307.0], [71.9, 307.0], [72.0, 307.0], [72.1, 307.0], [72.2, 307.0], [72.3, 307.0], [72.4, 307.0], [72.5, 307.0], [72.6, 307.0], [72.7, 307.0], [72.8, 307.0], [72.9, 307.0], [73.0, 307.0], [73.1, 307.0], [73.2, 307.0], [73.3, 308.0], [73.4, 308.0], [73.5, 308.0], [73.6, 308.0], [73.7, 308.0], [73.8, 308.0], [73.9, 308.0], [74.0, 308.0], [74.1, 308.0], [74.2, 308.0], [74.3, 308.0], [74.4, 308.0], [74.5, 308.0], [74.6, 308.0], [74.7, 308.0], [74.8, 308.0], [74.9, 308.0], [75.0, 308.0], [75.1, 309.0], [75.2, 309.0], [75.3, 309.0], [75.4, 309.0], [75.5, 309.0], [75.6, 309.0], [75.7, 309.0], [75.8, 309.0], [75.9, 309.0], [76.0, 309.0], [76.1, 309.0], [76.2, 309.0], [76.3, 309.0], [76.4, 309.0], [76.5, 309.0], [76.6, 309.0], [76.7, 309.0], [76.8, 309.0], [76.9, 309.0], [77.0, 310.0], [77.1, 310.0], [77.2, 310.0], [77.3, 310.0], [77.4, 310.0], [77.5, 310.0], [77.6, 310.0], [77.7, 310.0], [77.8, 310.0], [77.9, 310.0], [78.0, 310.0], [78.1, 310.0], [78.2, 310.0], [78.3, 310.0], [78.4, 310.0], [78.5, 310.0], [78.6, 310.0], [78.7, 311.0], [78.8, 311.0], [78.9, 311.0], [79.0, 311.0], [79.1, 311.0], [79.2, 311.0], [79.3, 311.0], [79.4, 311.0], [79.5, 311.0], [79.6, 311.0], [79.7, 311.0], [79.8, 311.0], [79.9, 311.0], [80.0, 311.0], [80.1, 311.0], [80.2, 311.0], [80.3, 311.0], [80.4, 311.0], [80.5, 312.0], [80.6, 312.0], [80.7, 312.0], [80.8, 312.0], [80.9, 312.0], [81.0, 312.0], [81.1, 312.0], [81.2, 312.0], [81.3, 312.0], [81.4, 312.0], [81.5, 312.0], [81.6, 312.0], [81.7, 312.0], [81.8, 312.0], [81.9, 313.0], [82.0, 313.0], [82.1, 313.0], [82.2, 313.0], [82.3, 313.0], [82.4, 313.0], [82.5, 313.0], [82.6, 313.0], [82.7, 313.0], [82.8, 313.0], [82.9, 313.0], [83.0, 314.0], [83.1, 314.0], [83.2, 314.0], [83.3, 314.0], [83.4, 314.0], [83.5, 314.0], [83.6, 314.0], [83.7, 314.0], [83.8, 314.0], [83.9, 314.0], [84.0, 314.0], [84.1, 314.0], [84.2, 314.0], [84.3, 314.0], [84.4, 315.0], [84.5, 315.0], [84.6, 315.0], [84.7, 315.0], [84.8, 315.0], [84.9, 315.0], [85.0, 315.0], [85.1, 315.0], [85.2, 315.0], [85.3, 315.0], [85.4, 316.0], [85.5, 316.0], [85.6, 316.0], [85.7, 316.0], [85.8, 316.0], [85.9, 316.0], [86.0, 317.0], [86.1, 317.0], [86.2, 317.0], [86.3, 317.0], [86.4, 317.0], [86.5, 317.0], [86.6, 318.0], [86.7, 318.0], [86.8, 318.0], [86.9, 318.0], [87.0, 318.0], [87.1, 318.0], [87.2, 318.0], [87.3, 319.0], [87.4, 319.0], [87.5, 319.0], [87.6, 319.0], [87.7, 319.0], [87.8, 319.0], [87.9, 319.0], [88.0, 319.0], [88.1, 319.0], [88.2, 320.0], [88.3, 320.0], [88.4, 320.0], [88.5, 320.0], [88.6, 320.0], [88.7, 320.0], [88.8, 321.0], [88.9, 321.0], [89.0, 321.0], [89.1, 321.0], [89.2, 321.0], [89.3, 322.0], [89.4, 322.0], [89.5, 322.0], [89.6, 322.0], [89.7, 322.0], [89.8, 322.0], [89.9, 323.0], [90.0, 323.0], [90.1, 323.0], [90.2, 323.0], [90.3, 323.0], [90.4, 324.0], [90.5, 324.0], [90.6, 324.0], [90.7, 324.0], [90.8, 325.0], [90.9, 325.0], [91.0, 325.0], [91.1, 325.0], [91.2, 326.0], [91.3, 326.0], [91.4, 326.0], [91.5, 326.0], [91.6, 326.0], [91.7, 327.0], [91.8, 327.0], [91.9, 327.0], [92.0, 327.0], [92.1, 328.0], [92.2, 328.0], [92.3, 328.0], [92.4, 329.0], [92.5, 329.0], [92.6, 329.0], [92.7, 329.0], [92.8, 330.0], [92.9, 330.0], [93.0, 330.0], [93.1, 331.0], [93.2, 331.0], [93.3, 331.0], [93.4, 332.0], [93.5, 332.0], [93.6, 333.0], [93.7, 333.0], [93.8, 333.0], [93.9, 334.0], [94.0, 334.0], [94.1, 335.0], [94.2, 335.0], [94.3, 336.0], [94.4, 336.0], [94.5, 337.0], [94.6, 337.0], [94.7, 338.0], [94.8, 338.0], [94.9, 338.0], [95.0, 338.0], [95.1, 339.0], [95.2, 340.0], [95.3, 340.0], [95.4, 341.0], [95.5, 342.0], [95.6, 343.0], [95.7, 344.0], [95.8, 345.0], [95.9, 347.0], [96.0, 348.0], [96.1, 349.0], [96.2, 349.0], [96.3, 350.0], [96.4, 351.0], [96.5, 352.0], [96.6, 352.0], [96.7, 353.0], [96.8, 353.0], [96.9, 354.0], [97.0, 356.0], [97.1, 358.0], [97.2, 360.0], [97.3, 361.0], [97.4, 362.0], [97.5, 365.0], [97.6, 368.0], [97.7, 370.0], [97.8, 376.0], [97.9, 379.0], [98.0, 380.0], [98.1, 383.0], [98.2, 388.0], [98.3, 388.0], [98.4, 389.0], [98.5, 396.0], [98.6, 401.0], [98.7, 402.0], [98.8, 406.0], [98.9, 416.0], [99.0, 417.0], [99.1, 420.0], [99.2, 421.0], [99.3, 426.0], [99.4, 432.0], [99.5, 443.0], [99.6, 452.0], [99.7, 469.0], [99.8, 481.0], [99.9, 518.0]], "isOverall": false, "label": "01 GET Personajes 15USR/2mins", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 14.0, "minX": 200.0, "maxY": 4197.0, "series": [{"data": [[300.0, 4035.0], [200.0, 4197.0], [400.0, 103.0], [500.0, 14.0]], "isOverall": false, "label": "01 GET Personajes 15USR/2mins", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 8335.0, "series": [{"data": [[0.0, 8335.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 14.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.68727801E12, "maxY": 15.0, "series": [{"data": [[1.68727827E12, 11.0], [1.6872781E12, 4.0], [1.68727831E12, 13.0], [1.68727814E12, 6.0], [1.68727801E12, 1.0], [1.68727835E12, 14.682222222222226], [1.68727818E12, 7.468750000000002], [1.68727805E12, 2.0], [1.68727822E12, 9.0], [1.68727809E12, 4.0], [1.68727826E12, 11.0], [1.68727813E12, 5.308139534883721], [1.6872783E12, 12.482428115015974], [1.68727817E12, 7.0], [1.68727834E12, 14.0], [1.68727821E12, 9.0], [1.68727804E12, 1.9333333333333338], [1.68727825E12, 10.283582089552239], [1.68727808E12, 3.081632653061224], [1.68727829E12, 12.0], [1.68727812E12, 5.0], [1.68727816E12, 6.888372093023254], [1.68727803E12, 1.0], [1.68727833E12, 14.0], [1.6872782E12, 8.111111111111112], [1.68727807E12, 3.0], [1.68727837E12, 14.748648648648649], [1.68727824E12, 10.0], [1.68727811E12, 4.708609271523179], [1.68727828E12, 11.869565217391301], [1.68727815E12, 6.0], [1.68727832E12, 13.081424936386766], [1.68727819E12, 8.0], [1.68727802E12, 1.0], [1.68727823E12, 9.705426356589147], [1.68727836E12, 15.0], [1.68727806E12, 2.5696202531645564]], "isOverall": false, "label": "EX1 - SimpsonsAPI (RampUp)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.68727837E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 299.04525862068976, "minX": 1.0, "maxY": 313.9959731543625, "series": [{"data": [[2.0, 304.80128205128193], [8.0, 309.14257812499955], [9.0, 306.5567190226871], [10.0, 308.524720893142], [11.0, 310.5779816513761], [3.0, 306.52813852813847], [12.0, 313.9959731543625], [13.0, 303.83424209378416], [14.0, 301.5150631681246], [15.0, 303.12379280070223], [1.0, 303.3846153846154], [4.0, 306.49006622516526], [5.0, 299.098445595855], [6.0, 299.04525862068976], [7.0, 300.2388059701494]], "isOverall": false, "label": "01 GET Personajes 15USR/2mins", "isController": false}, {"data": [[10.279793987303886, 305.21966702599184]], "isOverall": false, "label": "01 GET Personajes 15USR/2mins-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 15.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 144.6, "minX": 1.68727801E12, "maxY": 93270.2, "series": [{"data": [[1.68727827E12, 48010.2], [1.6872781E12, 24176.3], [1.68727831E12, 79128.8], [1.68727814E12, 37589.9], [1.68727801E12, 1451.7], [1.68727835E12, 88182.0], [1.68727818E12, 43856.0], [1.68727805E12, 13056.1], [1.68727822E12, 46483.7], [1.68727809E12, 24023.1], [1.68727826E12, 57375.1], [1.68727813E12, 33746.3], [1.6872783E12, 61219.5], [1.68727817E12, 44326.0], [1.68727834E12, 85600.1], [1.68727821E12, 46239.8], [1.68727804E12, 11757.6], [1.68727825E12, 52551.7], [1.68727808E12, 19088.1], [1.68727829E12, 63215.1], [1.68727812E12, 31034.9], [1.68727816E12, 42131.4], [1.68727803E12, 6425.5], [1.68727833E12, 81437.8], [1.6872782E12, 42366.4], [1.68727807E12, 18934.9], [1.68727837E12, 72505.2], [1.68727824E12, 48800.8], [1.68727811E12, 29712.7], [1.68727828E12, 58598.8], [1.68727815E12, 37977.2], [1.68727832E12, 77167.3], [1.68727819E12, 42131.4], [1.68727802E12, 6501.1], [1.68727823E12, 50516.5], [1.68727836E12, 93270.2], [1.68727806E12, 15358.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68727827E12, 4424.7], [1.6872781E12, 2239.5], [1.68727831E12, 7296.1], [1.68727814E12, 3467.8], [1.68727801E12, 144.6], [1.68727835E12, 8127.0], [1.68727818E12, 4045.3], [1.68727805E12, 1191.9], [1.68727822E12, 4280.0], [1.68727809E12, 2203.2], [1.68727826E12, 5291.8], [1.68727813E12, 3106.1], [1.6872783E12, 5652.9], [1.68727817E12, 4081.7], [1.68727834E12, 7892.5], [1.68727821E12, 4262.1], [1.68727804E12, 1083.6], [1.68727825E12, 4839.8], [1.68727808E12, 1770.0], [1.68727829E12, 5815.2], [1.68727812E12, 2871.6], [1.68727816E12, 3882.9], [1.68727803E12, 596.2], [1.68727833E12, 7512.8], [1.6872782E12, 3901.1], [1.68727807E12, 1733.7], [1.68727837E12, 6682.2], [1.68727824E12, 4497.0], [1.68727811E12, 2727.0], [1.68727828E12, 5400.0], [1.68727815E12, 3503.5], [1.68727832E12, 7097.6], [1.68727819E12, 3882.9], [1.68727802E12, 595.7], [1.68727823E12, 4659.7], [1.68727836E12, 8596.5], [1.68727806E12, 1426.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.68727837E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 296.33774834437077, "minX": 1.68727801E12, "maxY": 318.6837060702879, "series": [{"data": [[1.68727827E12, 312.44081632653035], [1.6872781E12, 304.6048387096774], [1.68727831E12, 300.36633663366325], [1.68727814E12, 297.7291666666667], [1.68727801E12, 311.875], [1.68727835E12, 304.66222222222217], [1.68727818E12, 310.64732142857144], [1.68727805E12, 307.28787878787875], [1.68727822E12, 303.72151898734177], [1.68727809E12, 311.76229508196724], [1.68727826E12, 310.84300341296915], [1.68727813E12, 299.50000000000006], [1.6872783E12, 318.6837060702879], [1.68727817E12, 300.2787610619468], [1.68727834E12, 303.9267734553775], [1.68727821E12, 310.01694915254234], [1.68727804E12, 304.6166666666668], [1.68727825E12, 308.80223880597026], [1.68727808E12, 304.41836734693885], [1.68727829E12, 308.689440993789], [1.68727812E12, 300.59748427672963], [1.68727816E12, 300.1860465116277], [1.68727803E12, 299.3030303030303], [1.68727833E12, 300.8533653846155], [1.6872782E12, 304.7407407407409], [1.68727807E12, 307.28124999999994], [1.68727837E12, 302.27837837837814], [1.68727824E12, 311.5220883534136], [1.68727811E12, 296.33774834437077], [1.68727828E12, 310.5919732441473], [1.68727815E12, 300.9278350515465], [1.68727832E12, 305.15776081424985], [1.68727819E12, 306.93953488372085], [1.68727802E12, 306.3030303030303], [1.68727823E12, 304.33333333333337], [1.68727836E12, 300.0231092436976], [1.68727806E12, 304.6962025316456]], "isOverall": false, "label": "01 GET Personajes 15USR/2mins", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.68727837E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 295.1258278145696, "minX": 1.68727801E12, "maxY": 317.7252396166133, "series": [{"data": [[1.68727827E12, 311.85714285714266], [1.6872781E12, 304.00806451612897], [1.68727831E12, 299.1757425742575], [1.68727814E12, 296.60937500000017], [1.68727801E12, 311.00000000000006], [1.68727835E12, 303.53999999999996], [1.68727818E12, 309.39732142857156], [1.68727805E12, 306.89393939393943], [1.68727822E12, 302.3417721518988], [1.68727809E12, 311.3442622950821], [1.68727826E12, 309.79863481228665], [1.68727813E12, 298.1453488372094], [1.6872783E12, 317.7252396166133], [1.68727817E12, 298.65929203539827], [1.68727834E12, 302.7254004576661], [1.68727821E12, 309.0423728813559], [1.68727804E12, 304.40000000000015], [1.68727825E12, 307.55597014925377], [1.68727808E12, 304.34693877551024], [1.68727829E12, 307.4751552795032], [1.68727812E12, 299.48427672955984], [1.68727816E12, 298.69302325581384], [1.68727803E12, 299.06060606060606], [1.68727833E12, 299.70673076923083], [1.6872782E12, 303.76388888888874], [1.68727807E12, 306.87499999999983], [1.68727837E12, 301.2324324324327], [1.68727824E12, 310.2690763052208], [1.68727811E12, 295.1258278145696], [1.68727828E12, 309.50501672240836], [1.68727815E12, 299.6134020618556], [1.68727832E12, 303.9033078880409], [1.68727819E12, 305.9209302325583], [1.68727802E12, 305.7575757575758], [1.68727823E12, 303.18604651162826], [1.68727836E12, 298.4159663865543], [1.68727806E12, 304.4303797468355]], "isOverall": false, "label": "01 GET Personajes 15USR/2mins", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.68727837E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.68727801E12, "maxY": 12.5, "series": [{"data": [[1.68727827E12, 0.20000000000000007], [1.6872781E12, 0.3870967741935486], [1.68727831E12, 0.3242574257425741], [1.68727814E12, 0.25], [1.68727801E12, 12.5], [1.68727835E12, 0.32444444444444454], [1.68727818E12, 0.38392857142857106], [1.68727805E12, 0.0], [1.68727822E12, 0.3881856540084387], [1.68727809E12, 0.0], [1.68727826E12, 0.1979522184300341], [1.68727813E12, 0.8313953488372096], [1.6872783E12, 0.7060702875399365], [1.68727817E12, 0.20796460176991152], [1.68727834E12, 0.3386727688787188], [1.68727821E12, 0.2923728813559323], [1.68727804E12, 0.9166666666666666], [1.68727825E12, 0.8246268656716417], [1.68727808E12, 0.5000000000000001], [1.68727829E12, 0.3881987577639753], [1.68727812E12, 0.28301886792452824], [1.68727816E12, 0.5023255813953486], [1.68727803E12, 0.0], [1.68727833E12, 0.28125], [1.6872782E12, 0.3287037037037037], [1.68727807E12, 0.3958333333333334], [1.68727837E12, 0.0], [1.68727824E12, 0.46987951807228917], [1.68727811E12, 0.357615894039735], [1.68727828E12, 0.7056856187290976], [1.68727815E12, 0.0], [1.68727832E12, 0.15012722646310434], [1.68727819E12, 0.455813953488372], [1.68727802E12, 0.0], [1.68727823E12, 0.5077519379844958], [1.68727836E12, 0.27521008403361336], [1.68727806E12, 0.6835443037974681]], "isOverall": false, "label": "01 GET Personajes 15USR/2mins", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.68727837E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 283.0, "minX": 1.68727801E12, "maxY": 590.0, "series": [{"data": [[1.68727827E12, 354.0], [1.6872781E12, 428.0], [1.68727831E12, 345.0], [1.68727814E12, 361.0], [1.68727801E12, 389.0], [1.68727835E12, 401.0], [1.68727818E12, 397.0], [1.68727805E12, 471.0], [1.68727822E12, 529.0], [1.68727809E12, 550.0], [1.68727826E12, 590.0], [1.68727813E12, 493.0], [1.6872783E12, 479.0], [1.68727817E12, 489.0], [1.68727834E12, 518.0], [1.68727821E12, 453.0], [1.68727804E12, 481.0], [1.68727825E12, 416.0], [1.68727808E12, 364.0], [1.68727829E12, 528.0], [1.68727812E12, 520.0], [1.68727816E12, 443.0], [1.68727803E12, 459.0], [1.68727833E12, 368.0], [1.6872782E12, 517.0], [1.68727807E12, 470.0], [1.68727837E12, 368.0], [1.68727824E12, 401.0], [1.68727811E12, 342.0], [1.68727828E12, 504.0], [1.68727815E12, 436.0], [1.68727832E12, 463.0], [1.68727819E12, 505.0], [1.68727802E12, 460.0], [1.68727823E12, 451.0], [1.68727836E12, 407.0], [1.68727806E12, 501.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68727827E12, 334.0], [1.6872781E12, 321.5], [1.68727831E12, 315.0], [1.68727814E12, 305.40000000000003], [1.68727801E12, 389.0], [1.68727835E12, 324.0], [1.68727818E12, 348.5], [1.68727805E12, 335.90000000000003], [1.68727822E12, 315.0], [1.68727809E12, 326.7], [1.68727826E12, 339.20000000000005], [1.68727813E12, 311.70000000000005], [1.6872783E12, 390.60000000000014], [1.68727817E12, 312.6], [1.68727834E12, 326.0], [1.68727821E12, 341.0], [1.68727804E12, 319.4], [1.68727825E12, 333.0], [1.68727808E12, 326.0], [1.68727829E12, 321.4], [1.68727812E12, 309.0], [1.68727816E12, 315.0], [1.68727803E12, 307.2], [1.68727833E12, 314.0], [1.6872782E12, 315.0], [1.68727807E12, 330.0], [1.68727837E12, 318.0], [1.68727824E12, 341.0], [1.68727811E12, 307.0], [1.68727828E12, 330.0], [1.68727815E12, 319.0], [1.68727832E12, 325.0], [1.68727819E12, 320.8], [1.68727802E12, 334.20000000000005], [1.68727823E12, 315.1], [1.68727836E12, 312.0], [1.68727806E12, 316.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68727827E12, 354.0], [1.6872781E12, 428.0], [1.68727831E12, 334.0], [1.68727814E12, 356.34999999999997], [1.68727801E12, 389.0], [1.68727835E12, 343.9200000000001], [1.68727818E12, 396.75], [1.68727805E12, 471.0], [1.68727822E12, 352.6400000000001], [1.68727809E12, 549.77], [1.68727826E12, 389.08000000000004], [1.68727813E12, 417.8100000000011], [1.6872783E12, 474.86], [1.68727817E12, 364.18999999999994], [1.68727834E12, 378.44000000000005], [1.68727821E12, 373.63], [1.68727804E12, 481.0], [1.68727825E12, 397.86], [1.68727808E12, 364.0], [1.68727829E12, 424.15999999999985], [1.68727812E12, 519.4], [1.68727816E12, 406.7200000000002], [1.68727803E12, 459.0], [1.68727833E12, 343.48999999999995], [1.6872782E12, 333.65999999999997], [1.68727807E12, 470.0], [1.68727837E12, 354.32000000000016], [1.68727824E12, 400.0], [1.68727811E12, 338.87999999999994], [1.68727828E12, 421.0], [1.68727815E12, 436.0], [1.68727832E12, 448.6], [1.68727819E12, 408.68], [1.68727802E12, 460.0], [1.68727823E12, 363.2800000000002], [1.68727836E12, 346.5300000000002], [1.68727806E12, 501.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68727827E12, 352.0], [1.6872781E12, 350.0], [1.68727831E12, 319.0], [1.68727814E12, 321.35], [1.68727801E12, 389.0], [1.68727835E12, 331.0], [1.68727818E12, 388.0], [1.68727805E12, 381.3], [1.68727822E12, 322.0], [1.68727809E12, 417.7], [1.68727826E12, 353.0], [1.68727813E12, 329.7], [1.6872783E12, 425.1000000000001], [1.68727817E12, 327.94999999999993], [1.68727834E12, 333.2999999999999], [1.68727821E12, 354.0], [1.68727804E12, 412.4999999999996], [1.68727825E12, 347.54999999999995], [1.68727808E12, 344.0], [1.68727829E12, 378.7499999999988], [1.68727812E12, 337.0], [1.68727816E12, 328.0], [1.68727803E12, 360.2999999999996], [1.68727833E12, 324.29999999999995], [1.6872782E12, 330.0], [1.68727807E12, 365.0499999999998], [1.68727837E12, 329.0], [1.68727824E12, 354.5], [1.68727811E12, 313.8], [1.68727828E12, 380.0], [1.68727815E12, 324.5], [1.68727832E12, 328.89999999999986], [1.68727819E12, 340.99999999999994], [1.68727802E12, 391.39999999999975], [1.68727823E12, 330.0], [1.68727836E12, 320.15], [1.68727806E12, 371.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68727827E12, 285.0], [1.6872781E12, 287.0], [1.68727831E12, 284.0], [1.68727814E12, 286.0], [1.68727801E12, 288.0], [1.68727835E12, 285.0], [1.68727818E12, 284.0], [1.68727805E12, 289.0], [1.68727822E12, 287.0], [1.68727809E12, 288.0], [1.68727826E12, 286.0], [1.68727813E12, 285.0], [1.6872783E12, 286.0], [1.68727817E12, 284.0], [1.68727834E12, 284.0], [1.68727821E12, 288.0], [1.68727804E12, 286.0], [1.68727825E12, 286.0], [1.68727808E12, 286.0], [1.68727829E12, 285.0], [1.68727812E12, 287.0], [1.68727816E12, 286.0], [1.68727803E12, 286.0], [1.68727833E12, 284.0], [1.6872782E12, 284.0], [1.68727807E12, 285.0], [1.68727837E12, 285.0], [1.68727824E12, 286.0], [1.68727811E12, 287.0], [1.68727828E12, 283.0], [1.68727815E12, 285.0], [1.68727832E12, 285.0], [1.68727819E12, 287.0], [1.68727802E12, 288.0], [1.68727823E12, 287.0], [1.68727836E12, 285.0], [1.68727806E12, 287.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68727827E12, 310.0], [1.6872781E12, 298.0], [1.68727831E12, 298.0], [1.68727814E12, 295.0], [1.68727801E12, 294.5], [1.68727835E12, 301.0], [1.68727818E12, 298.5], [1.68727805E12, 296.0], [1.68727822E12, 301.0], [1.68727809E12, 298.0], [1.68727826E12, 304.0], [1.68727813E12, 295.0], [1.6872783E12, 303.0], [1.68727817E12, 296.0], [1.68727834E12, 299.0], [1.68727821E12, 304.0], [1.68727804E12, 295.0], [1.68727825E12, 304.0], [1.68727808E12, 299.0], [1.68727829E12, 302.0], [1.68727812E12, 294.0], [1.68727816E12, 295.0], [1.68727803E12, 292.0], [1.68727833E12, 299.0], [1.6872782E12, 302.5], [1.68727807E12, 297.0], [1.68727837E12, 298.0], [1.68727824E12, 304.0], [1.68727811E12, 294.0], [1.68727828E12, 302.0], [1.68727815E12, 296.0], [1.68727832E12, 297.0], [1.68727819E12, 301.0], [1.68727802E12, 295.0], [1.68727823E12, 302.0], [1.68727836E12, 297.0], [1.68727806E12, 296.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.68727837E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 293.0, "minX": 1.0, "maxY": 389.0, "series": [{"data": [[3.0, 293.0], [4.0, 294.0], [5.0, 295.0], [6.0, 296.0], [7.0, 295.0], [8.0, 297.0], [9.0, 298.5], [10.0, 295.5], [11.0, 297.0], [12.0, 297.0], [13.0, 301.0], [14.0, 298.5], [15.0, 294.0], [16.0, 299.0], [17.0, 293.0], [18.0, 296.5], [19.0, 298.0], [20.0, 301.0], [21.0, 300.0], [22.0, 302.5], [23.0, 302.0], [24.0, 306.0], [25.0, 297.5], [26.0, 302.0], [27.0, 301.0], [28.0, 300.0], [29.0, 302.0], [30.0, 298.0], [31.0, 303.5], [32.0, 301.0], [33.0, 305.0], [34.0, 300.0], [35.0, 303.0], [36.0, 301.0], [37.0, 297.0], [39.0, 300.0], [38.0, 302.0], [41.0, 297.0], [40.0, 297.5], [42.0, 300.0], [43.0, 298.0], [44.0, 299.0], [45.0, 301.0], [47.0, 297.0], [46.0, 297.0], [48.0, 300.0], [49.0, 299.0], [50.0, 296.0], [51.0, 294.0], [53.0, 297.0], [52.0, 296.0], [1.0, 389.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 53.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 292.0, "minX": 1.0, "maxY": 389.0, "series": [{"data": [[3.0, 292.0], [4.0, 293.0], [5.0, 295.0], [6.0, 295.0], [7.0, 295.0], [8.0, 297.0], [9.0, 298.0], [10.0, 295.5], [11.0, 297.0], [12.0, 296.0], [13.0, 300.0], [14.0, 297.5], [15.0, 293.0], [16.0, 295.0], [17.0, 292.0], [18.0, 295.0], [19.0, 296.0], [20.0, 299.0], [21.0, 298.0], [22.0, 300.0], [23.0, 300.0], [24.0, 304.0], [25.0, 296.0], [26.0, 302.0], [27.0, 300.0], [28.0, 299.5], [29.0, 300.5], [30.0, 297.0], [31.0, 302.5], [32.0, 300.0], [33.0, 304.0], [34.0, 299.0], [35.0, 302.5], [36.0, 300.0], [37.0, 295.5], [39.0, 298.0], [38.0, 301.0], [41.0, 295.0], [40.0, 296.0], [42.0, 299.0], [43.0, 297.0], [44.0, 297.0], [45.0, 299.0], [47.0, 295.0], [46.0, 295.0], [48.0, 299.0], [49.0, 298.0], [50.0, 295.0], [51.0, 293.0], [53.0, 295.0], [52.0, 294.0], [1.0, 389.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 53.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.9, "minX": 1.68727801E12, "maxY": 47.6, "series": [{"data": [[1.68727827E12, 25.6], [1.6872781E12, 12.4], [1.68727831E12, 40.4], [1.68727814E12, 19.2], [1.68727801E12, 0.9], [1.68727835E12, 45.1], [1.68727818E12, 22.5], [1.68727805E12, 6.6], [1.68727822E12, 23.7], [1.68727809E12, 12.2], [1.68727826E12, 28.2], [1.68727813E12, 17.3], [1.6872783E12, 31.5], [1.68727817E12, 22.6], [1.68727834E12, 43.7], [1.68727821E12, 24.3], [1.68727804E12, 6.1], [1.68727825E12, 26.9], [1.68727808E12, 9.9], [1.68727829E12, 32.1], [1.68727812E12, 15.9], [1.68727816E12, 21.6], [1.68727803E12, 3.3], [1.68727833E12, 42.0], [1.6872782E12, 21.0], [1.68727807E12, 9.6], [1.68727837E12, 35.5], [1.68727824E12, 25.8], [1.68727811E12, 15.2], [1.68727828E12, 30.0], [1.68727815E12, 19.4], [1.68727832E12, 39.0], [1.68727819E12, 21.5], [1.68727802E12, 3.3], [1.68727823E12, 25.0], [1.68727836E12, 47.6], [1.68727806E12, 8.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.68727837E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.8, "minX": 1.68727801E12, "maxY": 47.6, "series": [{"data": [[1.68727827E12, 24.5], [1.6872781E12, 12.4], [1.68727831E12, 40.4], [1.68727814E12, 19.2], [1.68727801E12, 0.8], [1.68727835E12, 45.0], [1.68727818E12, 22.4], [1.68727805E12, 6.6], [1.68727822E12, 23.7], [1.68727809E12, 12.2], [1.68727826E12, 29.3], [1.68727813E12, 17.2], [1.6872783E12, 31.3], [1.68727817E12, 22.6], [1.68727834E12, 43.7], [1.68727821E12, 23.6], [1.68727804E12, 6.0], [1.68727825E12, 26.8], [1.68727808E12, 9.8], [1.68727829E12, 32.2], [1.68727812E12, 15.9], [1.68727816E12, 21.5], [1.68727803E12, 3.3], [1.68727833E12, 41.6], [1.6872782E12, 21.6], [1.68727807E12, 9.6], [1.68727837E12, 37.0], [1.68727824E12, 24.9], [1.68727811E12, 15.1], [1.68727828E12, 29.9], [1.68727815E12, 19.4], [1.68727832E12, 39.3], [1.68727819E12, 21.5], [1.68727802E12, 3.3], [1.68727823E12, 25.8], [1.68727836E12, 47.6], [1.68727806E12, 7.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.68727837E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.8, "minX": 1.68727801E12, "maxY": 47.6, "series": [{"data": [[1.68727827E12, 24.5], [1.6872781E12, 12.4], [1.68727831E12, 40.4], [1.68727814E12, 19.2], [1.68727801E12, 0.8], [1.68727835E12, 45.0], [1.68727818E12, 22.4], [1.68727805E12, 6.6], [1.68727822E12, 23.7], [1.68727809E12, 12.2], [1.68727826E12, 29.3], [1.68727813E12, 17.2], [1.6872783E12, 31.3], [1.68727817E12, 22.6], [1.68727834E12, 43.7], [1.68727821E12, 23.6], [1.68727804E12, 6.0], [1.68727825E12, 26.8], [1.68727808E12, 9.8], [1.68727829E12, 32.2], [1.68727812E12, 15.9], [1.68727816E12, 21.5], [1.68727803E12, 3.3], [1.68727833E12, 41.6], [1.6872782E12, 21.6], [1.68727807E12, 9.6], [1.68727837E12, 37.0], [1.68727824E12, 24.9], [1.68727811E12, 15.1], [1.68727828E12, 29.9], [1.68727815E12, 19.4], [1.68727832E12, 39.3], [1.68727819E12, 21.5], [1.68727802E12, 3.3], [1.68727823E12, 25.8], [1.68727836E12, 47.6], [1.68727806E12, 7.9]], "isOverall": false, "label": "01 GET Personajes 15USR/2mins-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.68727837E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.8, "minX": 1.68727801E12, "maxY": 47.6, "series": [{"data": [[1.68727827E12, 24.5], [1.6872781E12, 12.4], [1.68727831E12, 40.4], [1.68727814E12, 19.2], [1.68727801E12, 0.8], [1.68727835E12, 45.0], [1.68727818E12, 22.4], [1.68727805E12, 6.6], [1.68727822E12, 23.7], [1.68727809E12, 12.2], [1.68727826E12, 29.3], [1.68727813E12, 17.2], [1.6872783E12, 31.3], [1.68727817E12, 22.6], [1.68727834E12, 43.7], [1.68727821E12, 23.6], [1.68727804E12, 6.0], [1.68727825E12, 26.8], [1.68727808E12, 9.8], [1.68727829E12, 32.2], [1.68727812E12, 15.9], [1.68727816E12, 21.5], [1.68727803E12, 3.3], [1.68727833E12, 41.6], [1.6872782E12, 21.6], [1.68727807E12, 9.6], [1.68727837E12, 37.0], [1.68727824E12, 24.9], [1.68727811E12, 15.1], [1.68727828E12, 29.9], [1.68727815E12, 19.4], [1.68727832E12, 39.3], [1.68727819E12, 21.5], [1.68727802E12, 3.3], [1.68727823E12, 25.8], [1.68727836E12, 47.6], [1.68727806E12, 7.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.68727837E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


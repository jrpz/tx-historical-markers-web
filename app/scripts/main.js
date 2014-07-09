/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

// markernum: "3457",
// title: "Moore Field",
// indexname: "Moore Field",
// address: "",
// city: "Mission"…}
// address: ""
// atlas_number: "5215003457"
// city: "Mission"
// code: "World War II; aviation; military topics"
// county: "Hidalgo"
// indexname: "Moore Field"
// loc_desc: "from Mission, take FM 2993 north about 8 miles to FM 1925, then take FM 1925 west about 2 miles, then go north on FM 681 about 1 mile"
// markernum: "3457"
// markertext: "A United States aviation training field, originally financed by the nearby cities of Edinburg, McAllen and Mission, was started here in 1941.  Named for Lt. Frank M. Moore, a pilot killed in World War I, it was used for the training of World War II airmen.  After the field was closed in 1945, the facilities were shared by a tri-cities commercial airport and the Weaver H. Baker Memorial Tuberculosis Hospital.  Reactivated as Moore Air Force Base during the Korean War of the 1950s, the site has housed research offices of the United States Department of Agriculture since 1960.  (1981)"
// rthl: "0"
// size: "18"" x 28"""
// title: "Moore Field"
// utm_east: "566952"
// utm_north: "2917576"
// utm_zone: "14"
// year: "1981"

(function () {
  var markers_json_location = "./data/markers_hidalgo.json";
  $.getJSON(markers_json_location, function(data){
    var markers = data;
    var line_template = _.template('<tr class="<%- id %>"><td data-th="marker"><strong><%= title %></strong><br /><%= city %> - <%= year %><br /><%= coordinates %></td><td><%= text %></td></tr>');
    _.each(markers, function(marker, i){
      var line_item = {
        "id"          : marker.markernum,
        "title"       : marker.title,
        "address"     : marker.address,
        "city"        : marker.city,
        "year"        : marker.year,
        "text"        : marker.markertext,
        "coordinates" : 'Z: ' + marker.utm_zone + '<br/>E: ' + marker.utm_east + '<br/>N: ' + marker.utm_north
      };
      
      $('#markers_table tbody').append(line_template(line_item));
    });
  });
})();
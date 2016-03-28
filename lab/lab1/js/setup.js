var map = L.map('map', {
center: [40.000, -75.1090],
zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
subdomains: 'abcd',
minZoom: 0,
maxZoom: 20,
ext: 'png'
}).addTo(map);



var eachFeature = function(feature, layer) {
  layer.on('click', function (e) {
    var bounds = this.getBounds();
    map.fitBounds(bounds);
  });
};

//Calling my CartoDB dataset
var getDataAll = function (tableName, fcol, col, callback){
var sql = new cartodb.SQL({ user: 'eneedham', format: 'geojson' });
sql.execute("SELECT * FROM " + tableName).done(callback).done(function(geojson) {
   theLayer = L.geoJson(geojson, {
       onEachFeature: eachFeature,
       fillColor: fcol,
       color: col,
       weight: 1.5
      }).addTo(map).addData(geojson);
});
};


var getDataWhere2 = function (tableName, sqlStatement, rad, col){
var sql = new cartodb.SQL({ user: 'eneedham', format: 'geojson' });
sql.execute("SELECT * FROM " + tableName + " WHERE " + sqlStatement).done(function(geojson) {
   theLayer = L.geoJson(geojson, {
       onEachFeature: eachFeature,
       pointToLayer: function(feature, latlng){
         return L.circleMarker(latlng, {radius: rad,
          fillColor: col,
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8});
       },
       fillColor: "#BC8112",
       color: "#434343",
       weight: 3
      }).addTo(map).addData(geojson);
});
};


var getDataWhere = function (tableName, sqlStatement, rad, col, callback){
var sql = new cartodb.SQL({ user: 'eneedham', format: 'geojson' });
sql.execute("SELECT * FROM " + tableName + " WHERE " + sqlStatement).done(callback).done(function(geojson) {
   theLayer = L.geoJson(geojson, {
       onEachFeature: eachFeature,
       pointToLayer: function(feature, latlng){
         return L.circleMarker(latlng, {radius: rad,
          fillColor: col,
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8});
       },
       fillColor: "#BC8112",
       color: "#434343",
       weight: 3
      }).addTo(map).addData(geojson);
});
};

var defaultViewFunc = function(){
    // $('#intro').show();
    // $('#results').hide();
    map.setView([40.000, -75.1090], 11);
};

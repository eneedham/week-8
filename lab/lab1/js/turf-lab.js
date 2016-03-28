/* =====================
Lab 1: Turf.js

"Our maps have only interpreted data in various ways; the point is to change it."


In the coming weeks, we'll be looking at ways to explore, analyze, and create data.
This will require us to build upon concepts that we've already mastered. Turf.js is a
javascript library which provides some excellent utilities for fast, in-browser
spatial analysis.

Recall that GeoJSON is a format for representing spatial objects in JSON. It encodes
not only the geometric entities themselves (Points, Lines, Polygons) but also associated
properties (these are the properties of Features) and collections thereof (FeatureGroups).

This is useful for sending spatial data over the wire (we can present these objects in text
since they are JSON). But the predictable structure of a geojson object (there are
infinitely many possible geojson objects, though they all meet the criteria specified
here: http://geojson.org/) also benefits us by offering a structure which our code can
expect.

Consider the functions you've written before: their input has depended on the type
of data they receive. If you write a function which expects an object that has an 'x' and
a 'y' property, you can access those within your function body:

function exampleFunction(someObject) {
  return someObject.x + someObject.y;
}
exampleFunction({x: 1, y: 22}) === 23

Turf leans on the predictable structure of geojson to provide its analytic functions.
Here, Turf lays out the types you can expect to find throughout its documentation:
http://turfjs.org/static/docs/global.html

Let's look to a turf function's docs: http://turfjs.org/static/docs/module-turf_average.html
==================================================================================================
name              - Type                        - Description
==================================================================================================
polygons          - FeatureCollection.<Polygon> - polygons with values on which to average
points            - FeatureCollection.<Point>   - points from which to calculate they average
field             - String                      - the field in the points features from which to
                                                  pull values to average
outputField       - String                      - the field in polygons to put results of the averages
==================================================================================================
Returns           - FeatureCollection.<Polygon> - polygons with the value of outField set to
                                                  the calculated averages
==================================================================================================

What this tells us is that turf.average takes four arguments. The first
argument is a FeatureCollection of Polygons, the second, is a FeatureCollection
of Points, the third and fourth is a bit of text.

With those inputs, a FeatureCollection of polygons is produced which has the average value
of "field" from the points (captured within a spatial join) stored on its properties' field
"outputField".

All of the functionality within turf can be similarly understood by looking to its documentation.
Turf documentation: http://turfjs.org/static/docs/
Turf examples: http://turfjs.org/examples.html


Each exercise in this lab involves the creation of GeoJSON (feel free to use geojson.io) and
the use of that GeoJSON in some turf functions.

NOTE: you can use geojson.io's table view to attach properties to your geometries!

Exercise 1: Finding the nearest point
Take a look at http://turfjs.org/static/docs/module-turf_nearest.html
Produce a Feature and a FeatureCollection (look to the in-documentation examples if this is
unclear) such that the single Point Feature is in Philadelphia and the nearest point in the
FeatureCollection (there should be at least two other points in this collection) happens
to be in New York City. Plot the NYC point and no others with the use of turf.nearest.


Exercise 2: Finding the average point value (a form of spatial join)
Docs here: http://turfjs.org/static/docs/module-turf_average.html
Produce one FeatureCollection of points (at least 5) and one of polygons (at least 2)
such that, by applying turf.average, you generate a new set of polygons in which one of
the polygons has the property "averageValue" with a value of 100.


Exercise 3: Tagging points according to their locations
http://turfjs.org/static/docs/module-turf_tag.html
It can be quite useful to 'tag' points in terms of their being within this or that
polygon. You might, for instance, want to color markers which represent dumpsters
according to the day that trash is picked up in that area. Create three polygons
and use properties on those polygons to color 5 points.


*STRETCH GOAL*
Exercise 4: Calculating a destination
A species of bird we're studying is said to travel in a straight line for 500km
during a migration before needing to rest. One bird in a flock we want to track
has a GPS tag which seems to be on the fritz. We know for a fact that it started
flying from [-87.4072265625, 38.376115424036016] and that its last known coordinate
was [-87.5830078125, 38.23818011979866]. Given this information, see if you can
determine where we can expect this flock of birds to rest.
===================== */

// var drawControl = new L.Control.Draw();
// map.addControl(drawControl);
// map.on("draw:created", function(e){
//   var type = e.layerType; //the type of shape
//   var layer = e.layerType; //the leaflet layer for the shape
//   var id = L.stamp(layer); //the unique leaflet ID for the layer
//
//   L.layer.addTo(map);
// });


//Exercise 1

// var point =     {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           -75.02838134765625,
//           39.93817189499188
//         ]
//       }};
//
// point.properties.Name = "Point I added";
//
// var newPoint;
//
// L.geoJson(point, {
//   pointToLayer: function (feature, latlng){
//     return L.circleMarker (latlng, {color: "red", fillOpacity: 100, stroke: 0});
//   }
// }).addTo(map).bindPopup(point.properties.Name).openPopup();
//
// nearestFunc = function(partialApplication){
//   return function(data) {
//     // console.log(partialApplication);
//     // console.log(data);
//     var nearest = turf.nearest(partialApplication, data);
//     nearest.properties['marker-color'] = '#118E9F';
//     nearest.properties.Name = "I'm the nearest point";
//     newPoint = L.geoJson(nearest, {
//       pointToLayer: function (feature, latlng){
//         return L.circleMarker (latlng, {color: "red", fillOpacity: 100, stroke: 0, radius: 20});
//       }
//     }).addTo(map).bindPopup(nearest.properties.Name).openPopup();
//
//   };
// };
//
// var against = getDataWhere("philadelphiaschool_facilities2016", "grade_leve = 'High School'", 10, "blue", nearestFunc(point));



//Exercise 2

var points = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"value":12},"geometry":{"type":"Point","coordinates":[-75.11180877685547,39.97396296240704]}},{"type":"Feature","properties":{"value":36},"geometry":{"type":"Point","coordinates":[-75.10734558105469,39.99684889412591]}},{"type":"Feature","properties":{"value":21},"geometry":{"type":"Point","coordinates":[-75.12863159179688,40.00289791655391]}},{"type":"Feature","properties":{"value":90},"geometry":{"type":"Point","coordinates":[-75.12897491455077,39.97817244470628]}},{"type":"Feature","properties":{"value":45},"geometry":{"type":"Point","coordinates":[-75.179443359375,39.95185892663005]}},{"type":"Feature","properties":{"value":47},"geometry":{"type":"Point","coordinates":[-75.16708374023438,39.96238554917605]}},{"type":"Feature","properties":{"value":37},"geometry":{"type":"Point","coordinates":[-75.1742935180664,39.94896382136706]}},{"type":"Feature","properties":{"value":21},"geometry":{"type":"Point","coordinates":[-75.15609741210938,39.927378266437046]}},{"type":"Feature","properties":{"value":89},"geometry":{"type":"Point","coordinates":[-75.1962661743164,39.95159574030591]}},{"type":"Feature","properties":{"value":91},"geometry":{"type":"Point","coordinates":[-75.14167785644531,39.98054016455432]}},{"type":"Feature","properties":{"value":92},"geometry":{"type":"Point","coordinates":[-75.15506744384766,39.92290236029078]}},{"type":"Feature","properties":{"value":54},"geometry":{"type":"Point","coordinates":[-75.1578140258789,39.94738462139563]}},{"type":"Feature","properties":{"value":38},"geometry":{"type":"Point","coordinates":[-75.21171569824219,39.94501575308417]}},{"type":"Feature","properties":{"value":90},"geometry":{"type":"Point","coordinates":[-75.14442443847656,39.956596107293855]}},{"type":"Feature","properties":{"value":78},"geometry":{"type":"Point","coordinates":[-75.15129089355469,39.99632286685116]}},{"type":"Feature","properties":{"value":77},"geometry":{"type":"Point","coordinates":[-75.17772674560547,39.93711893299021]}},{"type":"Feature","properties":{"value":76},"geometry":{"type":"Point","coordinates":[-75.15884399414062,39.977120098439634]}}]};

// var polygons = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[-75.12090682983398,39.97054256712116],[-75.13669967651367,39.95988562303986],[-75.15420913696289,39.9602803542957],[-75.15592575073242,39.97856707037828],[-75.12983322143555,39.98737978325713],[-75.12090682983398,39.97054256712116]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[-75.14202117919922,39.99947896972128],[-75.12966156005858,39.98685368305097],[-75.15609741210938,39.97856707037828],[-75.16382217407227,39.984091590497],[-75.16176223754883,39.99763792744076],[-75.14202117919922,39.99947896972128]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[-75.1820182800293,39.97646237379361],[-75.1603889465332,39.9602803542957],[-75.15953063964844,39.97541000119306],[-75.17566680908203,39.97961939436217],[-75.1820182800293,39.97646237379361]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[-75.1406478881836,39.95554342883535],[-75.14974594116211,39.916582935817154],[-75.17171859741211,39.926588421909436],[-75.16519546508789,39.95488549657055],[-75.14184951782227,39.95778035119146],[-75.1406478881836,39.95554342883535]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[-75.2010726928711,39.93527621050255],[-75.22991180419922,39.945542175353026],[-75.2288818359375,39.969753220824714],[-75.18648147583008,39.96291183776865],[-75.18785476684569,39.94317324324499],[-75.2010726928711,39.93527621050255]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[-75.17704010009766,39.93632920085673],[-75.17601013183592,39.909209536859855],[-75.20261764526367,39.916582935817154],[-75.17704010009766,39.93632920085673]]]}}]};

// var averaged = turf.average(
//  polygons, points, 'value', 'pop_avg');
//
// console.log(averaged);
// var newPoly = L.geoJson(averaged).addTo(map);


//Exercise 3


var polys = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"stroke":"#555555","stroke-width":2,"stroke-opacity":1,"fill":"#f4bf06","fill-opacity":0.5},"geometry":{"type":"Polygon","coordinates":[[[-75.12176513671874,40.0115760127112],[-75.10185241699219,40.00447583427404],[-75.10082244873047,39.983039335388305],[-75.10442733764648,39.97501535728991],[-75.1219367980957,39.96949010336696],[-75.14305114746094,39.969884779173796],[-75.1519775390625,39.97356831014807],[-75.1435661315918,39.99776943210689],[-75.13893127441406,40.00723710253159],[-75.12176513671874,40.0115760127112]]]}},{"type":"Feature","properties":{"stroke":"#555555","stroke-width":2,"stroke-opacity":1,"fill":"#1b8f8a","fill-opacity":0.5},"geometry":{"type":"Polygon","coordinates":[[[-75.1413345336914,40.006974129414175],[-75.15438079833984,39.97383141190726],[-75.1655387878418,39.95778035119146],[-75.18304824829102,39.96725356408459],[-75.18922805786133,39.97317365561024],[-75.19575119018553,39.98093477655269],[-75.19643783569336,39.984091590497],[-75.19437789916992,39.98830044886866],[-75.18922805786133,39.99369266969988],[-75.17240524291991,40.003160905373115],[-75.15867233276367,40.00868343656941],[-75.1530075073242,40.0094723331283],[-75.14734268188477,40.00999825910233],[-75.14236450195312,40.01026122056978],[-75.1413345336914,40.006974129414175]]]}},{"type":"Feature","properties":{"stroke":"#555555","stroke-width":2,"stroke-opacity":1,"fill":"#35307a","fill-opacity":0.5},"geometry":{"type":"Polygon","coordinates":[[[-75.1526641845703,39.9709372368512],[-75.14493942260742,39.96777981520474],[-75.13223648071289,39.966858873085926],[-75.1274299621582,39.96554321996606],[-75.1351547241211,39.95620135477077],[-75.14116287231444,39.946726610648014],[-75.1409912109375,39.93501296038254],[-75.14511108398436,39.93395994977672],[-75.15918731689453,39.93514458556912],[-75.16622543334961,39.93948807471046],[-75.16931533813477,39.9434364619742],[-75.16674041748047,39.950806175257355],[-75.16244888305664,39.95633293919831],[-75.15832901000977,39.96317498054581],[-75.1526641845703,39.9709372368512]]]}},{"type":"Feature","properties":{"stroke":"#555555","stroke-width":2,"stroke-opacity":1,"fill":"#1bcb07","fill-opacity":0.5},"geometry":{"type":"Polygon","coordinates":[[[-75.17017364501953,39.934618083303945],[-75.17068862915039,39.91803118876891],[-75.15506744384766,39.91434466646843],[-75.14339447021484,39.91539797880347],[-75.14545440673828,39.92987938065514],[-75.15283584594727,39.932380403490875],[-75.16450881958006,39.934486457104775],[-75.17017364501953,39.934618083303945]]]}},{"type":"Feature","properties":{"stroke":"#555555","stroke-width":2,"stroke-opacity":1,"fill":"#94168d","fill-opacity":0.5},"geometry":{"type":"Polygon","coordinates":[[[-75.18081665039062,39.96291183776865],[-75.16742706298828,39.95462232189238],[-75.17086029052734,39.94462093372432],[-75.16965866088867,39.938829988015556],[-75.16742706298828,39.93698731160083],[-75.17171859741211,39.935802707704816],[-75.17223358154297,39.93093245403986],[-75.18871307373047,39.93251203374031],[-75.21017074584961,39.93488133494281],[-75.23094177246092,39.94001453950964],[-75.22613525390625,39.96291183776865],[-75.2153205871582,39.969753220824714],[-75.20124435424805,39.97277899879356],[-75.1959228515625,39.97396296240704],[-75.18802642822266,39.969753220824714],[-75.18081665039062,39.96291183776865]]]}}]};


var colorPoly = L.geoJson(polys, {
  style: function(feature, layer){
    return{'fillColor': feature.properties.fill, stroke: 0};
  }
});
// colorPoly.addTo(map);

var tagged = turf.tag(points, polys, 'fill', 'markerColor');
var plotTagged = L.geoJson(tagged, {
   pointToLayer: function (feature, latlng) {
     return L.circleMarker(latlng, {'fillColor': feature.properties.markerColor, 'color': feature.properties.markerColor, stroke: 0, fillOpacity: 0.75, radius: 5});
   }
 });
 plotTagged.addTo(map);
//

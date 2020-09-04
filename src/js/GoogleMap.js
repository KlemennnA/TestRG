function showGoogleMap() {
var mapObject = {
  center:new google.maps.LatLng(46.1015333,14.6066044,9),
  zoom:9,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var Ljubljana = new google.maps.LatLng(46.066096,14.4620592);
var marker = new google.maps.Marker({
    position: Ljubljana,
    map: map
  });

var map = new google.maps.Map(document.getElementById("GoogleMap"),mapObject);
marker.setMap(map);
}
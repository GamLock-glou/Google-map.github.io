
function jsonSerialization(map, number){
		var request = new XMLHttpRequest();
    request.open('GET', './scripts/streets.json', true);
    
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var json = JSON.parse(request.responseText);
        info(map, json[number].name, json[number].info, json[number].img);
        route(map, json[number].origin, json[number].destination);


      } else {
        // error
      }
    };
    request.send();
}



function s(marker) {
      marker.setVisible(false); // maps API hide call
      }




function route(map, originLatLng, destinationLatLng){
  // переменная принимающая json информацию.
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  // Markers показывает маркера. SuppressMarkers без маркеров.
  directionsDisplay.setOptions({Markers: true});
  
  directionsDisplay.setMap(map);

 /* var waypts = [
    {location: {lat: 50.747796, lng: 25.323531}, stopover: true},
    {location: {lat: 50.745726, lng: 25.319925}, stopover: true},
    {location: {lat: 50.743555, lng: 25.325369}, stopover: true},
    {location: {lat: 50.741620, lng: 25.322099}, stopover: true},
    {location: {lat: 50.742370, lng: 25.317764}, stopover: true},
    {location: {lat: 50.740230, lng: 25.317296}, stopover: true},
  ];
  */

  var request = {
    origin: new google.maps.LatLng(originLatLng.lat, originLatLng.lng), //точка старта
    destination: new google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng), //точка финиша
   // waypoints: waypts, 
    optimizeWaypoints: true, 
    travelMode: google.maps.DirectionsTravelMode.WALKING //режим прокладки маршрута
  };
  directionsService.route(request, function(response, status){
    if (status == google.maps.DirectionsStatus.OK){
      directionsDisplay.setDirections(response);
    }
  });
  directionsDisplay.setMap(map);


        //s(marker);
}



		//!!!War style map!!!
	function initMap() {
  const styledMapType = new google.maps.StyledMapType(
    [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9b2a6" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dcd2be" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ae9e90" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#93817c" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#a5b076" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#447530" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fdfcf8" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#f8c967" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e9bc62" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#e98d58" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ color: "#db8555" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#806b63" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8f7d77" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ebe3cd" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#b9d3c2" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#92998d" }],
      },
    ],
  );
  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.43131678165872, lng: 30.99370166465358 },
    zoom: 11,
    mapTypeControlOptions: {
      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain"],
    },
  });
  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
  var x = document.cookie;
	console.log(x);
	var number = x.substring(x.indexOf("=") + 1);
  jsonSerialization(map, number);
}

function info(map, name, info, img){
  // document.querySelector('.name').textContent = json.name;
   document.getElementById('name').innerHTML += name;
   document.getElementById('info').innerHTML += info;
   document.getElementById('img').innerHTML += img;
 }
 

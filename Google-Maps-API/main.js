// ------------------GOOOGLE MAPS API--------------------

navigator.geolocation.getCurrentPosition(initialize); //Retrieve Current location and pass location object to initialize function

// Initialize google maps passing it the location object from .getCurrentPosition()
var map;
var markers = [];

function initialize(pos) {
        var mapOptions = {
          center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
          zoom: 8
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        // Set marker at initialized center location
        var marker = new google.maps.Marker({
	    position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
	    map: map,
	    draggable: true,
	    title:"ME!"
		});

		google.maps.event.addListener(map, 'dblclick', function(event){

			console.log(event);
			addMarker(event.latLng);

		});

		google.maps.event.addListener(marker, 'rightclick', function(event){

			marker.setMap(null);

		});

}



// google.maps.event.addListener(map, 'click', function(event){

// 	console.log(event);
// 	// addMarker(event.latLng);

// });

var addMarker = function(location){

	marker= new google.maps.Marker({
		position: location,
		map: map,
		// title: prompt("enter marker label: ")
	});
	markers.push(marker);
}

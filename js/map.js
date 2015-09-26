/* ==========================================================================
    Map
    ========================================================================== */
    function init() {

        var myLatlng, mapOptions, mapElement, map, markerimage, marker, styleSs;

        myLatlng = new google.maps.LatLng(4.6741146, -74.04834249999999);
        mapOptions = {
            zoom: 16,
            panControl: false,
            scrollwheel: false,
            mapTypeControl: true,
            center: myLatlng
            // styles: [
            //     {
            //         "featureType": "landscape",
            //         "stylers": [
            //             {"saturation": -100},
            //             {"lightness": 65},
            //             {"visibility": "on"}
            //         ]
            //     }, {
            //         "featureType": "poi",
            //         "stylers": [
            //             {"saturation": -100},
            //             {"lightness": 51},
            //             {"visibility": "simplified"}
            //         ]
            //     }, {
            //         "featureType": "road.highway",
            //         "stylers": [
            //             {"saturation": -100},
            //             {"visibility": "simplified"}
            //         ]
            //     }, {
            //         "featureType": "road.arterial",
            //         "stylers": [
            //             {"saturation": -100},
            //             {"lightness": 30},
            //             {"visibility": "on"}
            //         ]
            //     }, {
            //         "featureType": "road.local",
            //         "stylers": [
            //             {"saturation": -100},
            //             {"lightness": 40},
            //             {"visibility": "on"}
            //         ]
            //     }, {
            //         "featureType": "transit",
            //         "stylers": [
            //             {"saturation": -100},
            //             {"visibility": "simplified"}
            //         ]
            //     }, {
            //         "featureType": "administrative.province",
            //         "stylers": [
            //             {"visibility": "off"}
            //         ]
            //     }, {
            //         "featureType": "water",
            //         "elementType": "labels",
            //         "stylers": [
            //             {"visibility": "on"},
            //             {"lightness": -25},
            //             {"saturation": -100}
            //         ]
            //     }, {
            //         "featureType": "water",
            //         "elementType": "geometry",
            //         "stylers": [
            //             {"hue": "#ffff00"},
            //             {"lightness": -25},
            //             {"saturation": -97}
            //         ]
            //     }
            // ]
        };
        mapElement = document.getElementById('map');
        map = new google.maps.Map(mapElement, mapOptions);
        // markerimage = 'img/marker.png';
        marker = new google.maps.Marker({
            position: myLatlng,
            map: map
            // icon: markerimage
        });
    }

    testconnection = navigator.onLine;
    if (testconnection) {
        google.maps.event.addDomListener(window, 'load', init);
    }
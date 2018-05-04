function initMap() {
  var location = {lat: 48.865043, lng:2.302054};
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 16, center: location, styles: [
{
"elementType": "geometry",
"stylers": [
  {
    "color": "#f5f5f5"
  }
]
},
{
"elementType": "labels.icon",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#616161"
  }
]
},
{
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#f5f5f5"
  }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#bdbdbd"
  }
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
  {
    "color": "#eeeeee"
  }
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#757575"
  }
]
},
{
"featureType": "poi.attraction",
"stylers": [
  {
    "visibility": "simplified"
  }
]
},
{
"featureType": "poi.park",
"elementType": "geometry",
"stylers": [
  {
    "color": "#e5e5e5"
  }
]
},
{
"featureType": "poi.park",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#ac8f5d"
  }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#9e9e9e"
  }
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
  {
    "color": "#ffffff"
  }
]
},
{
"featureType": "road.arterial",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#757575"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
  {
    "color": "#dadada"
  }
]
},
{
"featureType": "road.highway",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#616161"
  }
]
},
{
"featureType": "road.local",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#9e9e9e"
  }
]
},
{
"featureType": "transit.line",
"elementType": "geometry",
"stylers": [
  {
    "color": "#e5e5e5"
  }
]
},
{
"featureType": "transit.station",
"elementType": "geometry",
"stylers": [
  {
    "color": "#eeeeee"
  }
]
},
{
"featureType": "transit.station.rail",
"stylers": [
  {
    "visibility": "simplified"
  }
]
},
{
"featureType": "water",
"stylers": [
  {
    "color": "#3122e8"
  },
  {
    "visibility": "on"
  }
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
  {
    "color": "#c9c9c9"
  }
]
},
{
"featureType": "water",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#1e5c82"
  }
]
},
{
"featureType": "water",
"elementType": "labels.text",
"stylers": [
  {
    "color": "#ac8f5d"
  }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#9e9e9e"
  }
]
}
]});
  var marker = new google.maps.Marker({
      position: location,
      map: map
    });
};

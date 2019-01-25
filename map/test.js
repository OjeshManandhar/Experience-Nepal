mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/street-v9',
  center: [84, 28],
  zoom: 7
});
mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [84, 28],
    zoom: 6.25
});
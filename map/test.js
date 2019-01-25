mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [84, 28],
    zoom: 6.25
});

map.on('load', function(e) {
    // Add the data to your map as a layer
    map.addLayer({
        id: 'locations',
        type: 'symbol',
        // Add a GeoJSON source containing place coordinates and information.
        source: {
            type: 'geojson',
            data: geojson
        },
        layout: {
            'icon-image': '{marker-symbol}-15',
            'icon-allow-overlap': true,
            'icon-size': 1.5
        }
    });
});

map.addControl(new mapboxgl.NavigationControl());

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
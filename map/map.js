L.mapbox.accessToken = token;

const map = L.mapbox.map('map', 'mapbox.streets');
const geolocate = document.getElementById('geolocate');
const myLayer = L.mapbox.featureLayer().addTo(map);

map.on('load', function(e) {
    map.locate();
});

map.on('locationfound', function(e) {
    map.fitBounds(e.bounds);

    map.setView([e.latlng.lat, e.latlng.lng], 7);

    myLayer.setGeoJSON({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [e.latlng.lng, e.latlng.lat]
        },
        properties: {
            'title': 'You are here',
            'marker-color': '#ff8888',
            'marker-size': 'large',
            'marker-symbol': 'star'
        }
    });
});

map.on('locationerror', function() {
    console.log('Position could not be found');
});

map.featureLayer.setGeoJSON(geojson);

L.control.locate().addTo(map);
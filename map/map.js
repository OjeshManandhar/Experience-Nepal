mapboxgl.accessToken = token;

function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 10
    });
}

function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();

    var info = '<h3>' + currentFeature.properties.title + '</h3>' + '<h4>' + currentFeature.properties.address;
    if (currentFeature.properties.hasOwnProperty('redeem')) {
        info += ', <b>' + currentFeature.properties.redeem + ' points</b>';         //Reedem
    }
    else if (currentFeature.properties.hasOwnProperty('rating')) {
        info += ', <b>' + currentFeature.properties.rating + ' stars</b>';         //Rating
    }
    info += '</h4>';


    var popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(info)
        .addTo(map);
}

function showInformation(currentFeature) {
    var info = document.getElementById('information');
    var prop = currentFeature.properties;

    //Removing the previous element
    while (info.firstChild) {
        info.removeChild(info.firstChild);
    }

    //Creating container class
    var container = info.appendChild(document.createElement('div'));
    container.classList = 'contaier-fluid p-2';

    //Creating row class
    var row = container.appendChild(document.createElement('div'));
    row.classList = 'row p-2';

    //Creating image-container class
    var image = row.appendChild(document.createElement('div'));
    image.classList = 'image col-xs-12 col-sm-10 col-md-6 col-lg-4 text-center';

    //Creating img tag
    var img = image.appendChild(document.createElement('img'));
    img.className = 'img-fluid';
    img.src = imageLocation;

    //Creating detail-container class
    var detail = row.appendChild(document.createElement('div'));
    detail.id = 'detail';
    detail.classList = 'detail col-sm-12 col-md-6 col-lg-8';

    var info = '<h3>' + prop.title + '</h3>';       //Title
    if (prop.hasOwnProperty('redeem')) {
        info += '<p> <b>Redeem Points:</b> ' + prop.redeem + ' points</p>';         //Reedem
    }
    else if (prop.hasOwnProperty('rating')) {
        info += '<p> <b>Ratings:</b> ' + prop.rating + ' stars</p>';         //Ratings
    }
    info += '<p> <b>Address:</b> ' + prop.address + '</p>';         //Address

    for (var key in prop) {
        if (prop.hasOwnProperty(key)) {
            if (key === 'marker-color') {
                break;
            }

            console.log(key, ' => ', prop[key]);
            
            if (key === 'title' || key === 'redeem' || key === 'address' || key === 'description' || key === 'rating') {
                continue;
            }
            
            if (key === 'phonenumber') {
                info += '<p><b>Phone Number : </b>' + prop[key] + '</p>';
            }
            else {
                info += '<p><b>' + key + ': </b>' + prop[key] + '</p>';
            }
        }
    }

    if (prop.hasOwnProperty('description')) {
        info += '<p><b>Description:</b> ' + prop.description + '</p>';         //Description
    }

    /*
    //Adding information in detail
    var info = '<h3>' + prop.title + '</h3>';       //Title

    if (prop.reedem) {
        info += '<h5>Redeem Points: </h5><h6>' + prop.reedem + '</h6>';         //reedem Points
    }

    info += '<p> <b>Address:</b> ' + prop.address + '</p><br>';         //Address
    
    if (prop.state) {
        info += '<p> <b>State: </b> '+ prop.state + '</p><br>';        //State
    }
    
    if (prop.phonenumber) {
        info += '<p> <b>Phone-number: </b> '+ prop.phonenumber + '</p><br>';        //Phone number
    }
    
    if (prop.description) {
        info += '<p>'+ prop.description + '</p><br>';        //Description
    }
    */

    detail.innerHTML = info;
}

function buildLocationList(data) {
    for (i = 0; i < data.features.length; i++) {
        var currentFeature = data.features[i];
        var prop = currentFeature.properties;

        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.className = 'item';
        listing.id = "listing-" + i;

        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.dataPosition = i;
        link.innerHTML = prop.title;

        var details = listing.appendChild(document.createElement('div'));
        var info = prop.address;
        if (prop.hasOwnProperty('redeem')) {
            info += ', <b>' + prop.redeem + ' points</b>';         //Reedem
        }
        else if (prop.hasOwnProperty('rating')) {
            info += ', <b>' + prop.rating + ' stars</b>';         //Rating
        }
        details.innerHTML = info;
        
        link.addEventListener('click', function(e){
            var clickedListing = data.features[this.dataPosition];
            flyToStore(clickedListing);
            createPopUp(clickedListing);
            showInformation(clickedListing);
            var activeItem = document.getElementsByClassName('active');

            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [84, 28],
    zoom: 6.25
});

//Show Navigation Controls i.e. Zoom In, Zoom Out and Comaps
map.addControl(new mapboxgl.NavigationControl());

//Show find position control
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

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

    buildLocationList(geojson);
});

// Change the cursor to a pointer when the mouse is over the locations layer.
map.on('mouseenter', 'locations', function () {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'locations', function () {
    map.getCanvas().style.cursor = '';
});

// Add an event listener for when a user clicks on the map
map.on('click', function(e) {
    // Query all the rendered points in the view
    var features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });
    if (features.length) {
        var clickedPoint = features[0];
        // 1. Fly to the point
        flyToStore(clickedPoint);
        // 2. Close all other popups and display popup for clicked store
        createPopUp(clickedPoint);
        // 3. Show detail of the clicked place below the map
        showInformation(clickedPoint);
        // 4. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
        var selectedFeature = clickedPoint.properties.title;

        for (var i = 0; i < geojson.features.length; i++) {
            if (geojson.features[i].properties.title === selectedFeature) {
                selectedFeatureIndex = i;
            }
        }
        // Select the correct list item using the found index and add the active class
        var listing = document.getElementById('listing-' + selectedFeatureIndex);
        listing.classList.add('active');
    }
});
// Get data from cities.js , add a variable and assign it to the cities array.
//let cityData = cities;

// iterate through each city object and add each city location to the marker() function,
//for (let i = 0; i < cities.length; i++)

// Loop through the cities array and create one marker for each city.
//cityData.forEach(function(city) {
    //console.log(city)
    //L.marker(city.location).addTo(map);
//});

// Get data from cities.js
//let cityData = cities;

// Create the map objecy with a center and zoom level.
let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "red"
}).addTo(map);

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "yellow"
 }).addTo(map);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
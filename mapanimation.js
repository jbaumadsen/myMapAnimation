// This array contains the coordinates for all bus stops between MIT and Harvard
const makeRequest = async function (url) {
  const response = await fetch(url);
  const data = await response.json();
  data = JSON.parse(data);
  return data;
};


const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

const points = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoianFiYXVtYWRzZW4iLCJhIjoiY2tuN3Qxejl3MHJlMzJwcGh1NDdyMXV2YyJ9.9LFV4BNj-GMwLekHJgst-g';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker()
.setLngLat(busStops[0])
.addTo(map)
.setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"));

var stopMarker = [];
for (x in busStops){
  stopMarker[x] = new mapboxgl.Marker()
  .setLngLat(busStops[x])
  .addTo(map);  
}
// counter here represents the index of the current bus stop
let counter = 0;

function move() {
  if(counter >= points.length - 1) return; 
  let starty = points[counter];
  let endy = points[counter + 1];
  marker.setLngLat(starty);
  // startMarker.setLngLat(starty);
  // endMarker.setLngLat(endy);
  let velX = endy[0] - starty[0];
  let velY = endy[1] - starty[1];
  travCounter = 0;
  trav(starty, velX, velY); 
  counter++;
}

let travCounter = 0;

function trav(starty, velX, velY) {
  if (travCounter >= 10){
    move();
    return;
  }
  let newX = starty[0] + (travCounter * velX / 10);
  let newY = starty[1] + (travCounter * velY / 10);

  setTimeout(() => {
    marker.setLngLat([newX, newY]);
    travCounter++;
    trav(starty, velX, velY);  
  }, 200)
}

// // Do not edit code past this point
// if (typeof module !== 'undefined') {
//   module.exports = { move };
// }

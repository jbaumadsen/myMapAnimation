let url = "https://gisprpxy.itd.state.ma.us/arcgisserver/rest/services/AGOL/MBTA_Bus/FeatureServer/0/query?where=TOWN%20%3D%20'CAMBRIDGE'&outFields=TOWN,OBJECTID&outSR=4326&f=json"
// let stopInfo = [];
let features = [];
var otherStopMarker = [];

const makeRequest = async function (url) {
  const response = await fetch(url);
  // stopInfo = await response.json();
  features = await response.json().features
}

for (i in features){
  let xCoord = features[i].geometry.x;
  let yCoord = features[i].geometry.y;
  otherStopMarker[i] = new mapboxgl.Marker()
  .setLngLat([xCoord, yCoord])
  .addTo(map);  
  otherStopMarker[i].ID = features[i].attributes.OBJECTID;
}

stopInfo = makeRequest(url);

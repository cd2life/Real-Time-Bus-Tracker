// add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2ZsZWUxOTkxIiwiYSI6ImNrbjltOWx0aTBhd2kydm9vaHcyaGxudmwifQ.WCMUH5FwJNEot8yKjDY4Vw';
  
// This is the map instance
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [0, 0],
  zoom: 2
});

// add a marker
var marker = new mapboxgl.Marker();
  
function animateMarker(timestamp) {
  var radius = 20;
  
  // Update the data to a new position based on the animation timestamp. The
  // divisor in the expression `timestamp / 1000` controls the animation speed.
  marker.setLngLat([
  Math.cos(timestamp / 1000) * radius,
  Math.sin(timestamp / 1000) * radius
  ]);
  
  // Ensure it's added to the map. This is safe to call if it's already added.
  marker.addTo(map);
  
  // Request the next frame of the animation.
  requestAnimationFrame(animateMarker);
}
  
// Start the animation.
requestAnimationFrame(animateMarker);

// Do not edit code past this point
if (typeof module !== 'undefined') {
    module.exports = { move };
}

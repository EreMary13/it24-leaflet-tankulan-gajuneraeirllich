const map = L.map("map").setView(
[8.3688, 124.8641], 17
);
L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
maxZoom: 19
}
).addTo(map);

map.on("click", function(event) {
const lat = event.latlng.lat;
const lng = event.latlng.lng;

L.popup()
.setLatLng(event.latlng)
.setContent(
"Latitude: " + lat.toFixed(5) +
"<br>Longitude: " + lng.toFixed(5)
)
.openOn(map);
});

const locations = [
{ name: "Manolo Fortich Centennial Plaza", lat: 8.36795, lng: 124.86582 },
{ name: "Manolo Fortich Gymnasium", lat: 8.36843, lng: 124.86675},
{ name: "Manolo Fortich Central Elementary School", lat: 8.36914, lng: 124.86432}
];

locations.forEach(function(place) {
L.marker([place.lat, place.lng])
.addTo(map)
.bindPopup("<b>" + place.name + "</b><p>Welcome to Tankulan's Public Landmarks!</p>");
});

L.circle([8.36855, 124.86581], {
color: "red",
fillColor: "#a31717",
fillOpacity: 0.3,
radius: 500
}).addTo(map);


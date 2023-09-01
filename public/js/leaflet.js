/* eslint-disable */
export const displayMap = (locations) => {
  let map = L.map('map', { zoomControl: false });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var greenIcon = L.icon({
    iconUrl: '/img/pin.png',
    iconSize: [32, 40],
    iconAnchor: [16, 45],
    popupAnchor: [0, -50],
  });

  const points = [];
  locations.forEach((loc) => {
    // Create points
    points.push([loc.coordinates[1], loc.coordinates[0]]);

    // Add markers
    L.marker([loc.coordinates[1], loc.coordinates[0]], { icon: greenIcon })
      .addTo(map)
      // Add popup
      .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`, {
        autoClose: false,
      })
      .openPopup();
  });

  const bounds = L.latLngBounds(points).pad(0.5);
  map.fitBounds(bounds);

  map.scrollWheelZoom.disable();
};

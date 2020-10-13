//criando mapa
const map = L.map("mapid").setView([-22.5164655, -43.9987692], 17);

//criando tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criando icone
const icon = L.icon({
  iconUrl: "../public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//criando popup
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Orfanato Teste <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>'
);

//criando marker
L.marker([-22.5164655, -43.9987692], { icon }).addTo(map).bindPopup(popup);

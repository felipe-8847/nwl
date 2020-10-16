const map = L.map('mapid').setView([-23.5339861,-46.7844466], 16);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


const icon = L.icon({
    iconUrl: "./public/img/Group 17.svg", 
    iconSize: [58, 68],
    iconAnchor: [29 ,68],
    popupAnchor: [190, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1"class="choose-orphanage"><img src="./public/img/Arrow.svg"> </a>')


L.marker([-23.5339861,-46.7844466], { icon })
    .addTo(map)
    .bindPopup(popup)

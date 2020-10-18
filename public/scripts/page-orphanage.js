const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//criando mapa
const map = L.map("mapid", options).setView([lat, lng], 16);

//criando tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criando icone
const icon = L.icon({
  iconUrl: "../images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


//criando marker
L.marker([lat, lng], { icon }).addTo(map)

/* galeria de imagens*/

function selectImage(event){
    const button = event.currentTarget

    /*removendo todas as classes .active*/
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    /*selecionando a imagem clicada*/
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    /*atualizando o container de imagem*/
    imageContainer.src = image.src
    
    /*adicionando a classe .active pro botao clicado*/
    button.classList.add('active')
}

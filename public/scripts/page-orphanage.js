const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}
//criando mapa
const map = L.map("mapid", options).setView([-22.5164655, -43.9987692], 17);

//criando tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criando icone
const icon = L.icon({
  iconUrl: "../public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


//criando marker
L.marker([-22.5164655, -43.9987692], { icon }).addTo(map)

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

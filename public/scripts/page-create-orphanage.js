//criando mapa
const map = L.map("mapid").setView([-22.5164655, -43.9987692], 15);

//criando tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criando icone
const icon = L.icon({
  iconUrl: "../images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});


//criar marker
let marker


map.on('click', (event)=>{

    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    if (marker){
        map.removeLayer(marker)
    }

    //add icon layer
    marker = L.marker ([lat, lng], { icon }).addTo(map) 
})


//adicionar campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images
        const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
        const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada.
        const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificando se está vazio
    //     const input = newFieldContainer.children[0].value
    //     if (input){
 //meu jeito   // //limpando o campo
    //     newFieldContainer.children[0].value = ""
    // //adicionar o clone ao container de #images
    //     container.appendChild(newFieldContainer)
    //     }


    //jeito dele
    //verificando se está vazio
        const input = newFieldContainer.children[0]
        if(input.value == ""){
            return null
        }
    //limpando o campo    
        input.value = ""
    //adicionar o clone ao container de #images    
        container.appendChild(newFieldContainer)
}


function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    //deletar o valor do campo
    span.parentNode.remove()
}

//seleção Y/N

function toggleSelect(event){
    //retirar a classe active dos 2 botoes
        document.querySelectorAll('.button-select button').forEach(button=>button.classList.remove('active'))
    //colocar a class .active no botão  clicado
        const button = event.currentTarget
        button.classList.add('active')
    //atualizar o input hidden com o valor
        const input = document.querySelector('[name="open_weekends"]')
        input.value = button.dataset.value
}

function validate(event){
    //validar se lat e lng estão preenchidos

    const lat = document.querySelector('.input-lat')
    const lng = document.querySelector('.input-lng')
    console.log(lat)
    console.log(lng)
      if(!lat.value && !lng.value){//lat or lng n preenchido
     event.preventDefault()
     alert('Selecione a localização')
 }
}
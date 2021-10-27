'use strict'

import cards from './cards.js'
var prueba = document.querySelector("#__next > div.mt-20.pb-20.sm\\:pb-32 > div > div:nth-child(2) > div:nth-child(5) > div.rounded-12.border.border-gray-3.pt-20.md\\:pt-28.pb-4.pl-16.md\\:pl-32.pr-4.bg-gray-4.overflow-hidden.flex.flex-wrap > div:nth-child(1) > div.mb-8.flex.items-center.justify-center > svg")
/* Definicion de constantes con nodos de la vista
- Contenedor de las cartas
- Selección de cada input para el buscador de las cartas */
const contenedorCards = document.getElementById('contenedor-cards')
const filterText = document.getElementById('filter-text')
filterText.value = ''
filterText.innerText = ''
const breedInput = document.getElementById('breed-input')
const partInput = document.getElementById('part-input')
const distanceInput = document.getElementById('distance-input')

var cardsAux = cards;
var auxiliarCardsCoincidence;
var activeFilter = {
    breed: null,
    part: null,
    distance: null
}
var filterAux = activeFilter;
function cleanCards (){
    while(contenedorCards.firstChild){
        contenedorCards.removeChild(contenedorCards.firstChild)
    }
}
function printCards(carta, index){

    var {name, hability, url, distance, path, description} = carta;
    distance = distance ? 'Ranged' : 'Melee'
    if(name == 'STRAWBERRY SHORTCAKE')
    distance = '2'
    var etiqueta = "<div class='card' id='"+index+"'><div class='title-card'> <p>"+path+" "+ name+"</p><p>"+distance+"</p>"
    var etiquetaAuxiliar = "</div><div><p class='energy'>1</p><p class='hability'>"+hability+"</p><p class='description'>"+description+"</p><img class='card-image' src='"+url+"' alt=''></div></div>"
    var abc = etiqueta + etiquetaAuxiliar;
    var contenedorTexto= document.createElement("li");
    contenedorCards.appendChild(contenedorTexto);
    contenedorTexto.innerHTML = abc;

}
/*Cargar cartas cuando la página se inicia */
function loadCards(){
    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        printCards(element,index);
    }
}
/*Busca las cartars coincidentes en el buscador por texto */
const searchCards = () => {
      if(filterText.value != '' || filterText.value){
        var all_cards_coincidences = cardsAux.filter( carta => new RegExp(filterText.value, 'i').test(carta.name.toLowerCase().concat(carta.hability.toLocaleLowerCase())))
        auxiliarCardsCoincidence = all_cards_coincidences
        if(all_cards_coincidences){
            let i = 0;
            cleanCards()
            for (let index = 0; index < all_cards_coincidences.length; index++) {
                const element = all_cards_coincidences[index];
                printCards(element,index)
            }
        }else{
            cleanCards()
            return console.log('cant print no coincidendes Error 200');
        }
    }else{
        cleanCards()
        loadCards()
    }

}
/*Filtra las cartas correspondientes al tipo de filtro coincidente */
function filterCards (filtros){
    console.log(filtros.distance);
    cardsAux = cards;
    if(filtros.breed != 0){
        cardsAux = cardsAux.filter( carta => new RegExp(filtros.breed, 'i').test(carta.breed.toLowerCase()))
    }
    
    if(filtros.part != 0){
        cardsAux = cardsAux.filter( carta => new RegExp(filtros.part, 'i').test(carta.part.toLowerCase()))
    }

    if (filtros.distance != 0) {
        cardsAux = cardsAux.filter( carta => new RegExp(filtros.distance, 'i').test(carta.distance))
    }
    return
}


/*Recibe los filtros de las cartas que se desean buscar y las guarda en un objeto para ser cargadas por la funcion filterCards */
function filters (breed,part,distance){
    console.log(arguments[0],arguments[1],arguments[2]);

    activeFilter.breed = arguments[0]
    activeFilter.part = arguments[1]
    activeFilter.distance = arguments[2]

    cleanCards()
    filterCards(activeFilter)
    for (let index = 0; index < cardsAux.length; index++) {
        const element = cardsAux[index];
        printCards(element,index)
    }
}
/*Código de ejecución */

filterText.addEventListener('input', searchCards)

breedInput.addEventListener('change',() =>{
    let breedValue = breedInput.value
    let partValue = partInput.value
    let distanceValue = distanceInput.value
    filters(breedValue,partValue,distanceValue)
})

partInput.addEventListener('change', () =>{
    let breedValue = breedInput.value
    let partValue = partInput.value
    let distanceValue = distanceInput.value
    filters(breedValue,partValue,distanceValue)
})

distanceInput.addEventListener('change', () =>{
    let breedValue = breedInput.value
    let partValue = partInput.value
    let distanceValue = distanceInput.value
    filters(breedValue,partValue,distanceValue)
})

window.onload = loadCards();

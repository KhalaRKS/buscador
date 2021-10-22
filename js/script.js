'use strict'

import cards from './cards.js'

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

    var {name, hability, url} = carta;
    var etiqueta = "<div class='card' id='"+index+"'><div> <p>"+name+"</p><p>"+hability+"</p>"
    var etiquetaAuxiliar = "</div><div><img class='card-image' src='"+url+"' alt=''></div></div>"
    var abc = etiqueta + etiquetaAuxiliar;
    var contenedorTexto= document.createElement("li");
    contenedorCards.appendChild(contenedorTexto);
    contenedorTexto.innerHTML = abc;

    }

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
    }

}

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



function filter (breed,part,distance){
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
filterText.addEventListener('input', searchCards)
breedInput.addEventListener('change',function(){
    let breedValue = breedInput.value
    let partValue = partInput.value
    let distanceValue = distanceInput.value
    filter(breedValue,partValue,distanceValue)
})
partInput.addEventListener('change', function(){
    let breedValue = breedInput.value
    let partValue = partInput.value
    let distanceValue = distanceInput.value
    filter(breedValue,partValue,distanceValue)
})
distanceInput.addEventListener('change', function(){
    let breedValue = breedInput.value
    let partValue = partInput.value
    let distanceValue = distanceInput.value
    filter(breedValue,partValue,distanceValue)
})
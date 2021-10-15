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
var auxiliarCardsCoincidence

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
      console.log('entre');
      if(filterText.value != '' || filterText.value){
        var all_cards_coincidences = cards.filter( carta => new RegExp(filterText.value, 'i').test(carta.name.toLowerCase().concat(carta.hability.toLocaleLowerCase())))
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
  function filterCards (breed,part,distance){

      if((breed && part && distance) == undefined){
          return
      }
      if(auxiliarCardsCoincidence){
        for (let index = 0; index < all_cards_coincidences.length; index++) {
            if (auxiliarCardsCoincidence[index].breed == arguments[0]
            ||  auxiliarCardsCoincidence[index].part == arguments[1]
            ||  auxiliarCardsCoincidence[index].distance == arguments[2] ) {
                const element = auxiliarCardsCoincidence[index];
                printCards(element,index)
            }

        }
      }else{
        var printedCards = []
        for (let index = 0; index < cards.length; index++) {
            if (cards[index].breed == arguments[0]
            ||  cards[index].part == arguments[1]
            ||  cards[index].distance == arguments[2] ) {
                const element = cards[index];
                printCards(element,index)
               printedCards.push(element)
            }
        }
        return printedCards
      }
  }

/*function filter (breed,part,distance){
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        if (arguments[index]) {
            
        }
        
    }
    switch () {
        case value:
            break;
        default:
            break;
    }
}*/
//filterCards('beast','horn','hola')
filterText.addEventListener('input', searchCards)
//breedInput.addEventListener('change', filter)
//partInput.addEventListener('change', filter)

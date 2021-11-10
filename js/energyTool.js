'use strict'
const displayEnergy = document.getElementById('displayEnergyTool')
/*const buttonPlusEnergy = document.getElementById('buttonPlusEnergy')
const buttonMinusEnergy = document.getElementById('buttonMinusEnergy')

const buttonNextRoundEnergy = document.getElementById('buttonNextRoundEnergy')
const buttonResetEnergy = document.getElementById('buttonResetEnergy')*/
const allButtonsEnergy = document.getElementsByClassName('btn-energy')

var energyCounter = 3;
displayEnergy.innerText= `${energyCounter} / 10`;
console.log(allButtonsEnergy);

for (let index = 0; index < allButtonsEnergy.length; index++) {
    const element = allButtonsEnergy[index];
    console.log(element);
    element.addEventListener ('click', ()=>{
        // si llega value = 0 de el boton, el contador se resetea (Indica reset)
        if(element.value == 0){
            energyCounter = 3
        }//Si llega value = 1 de el boton, indica siguiente ronda (El display sumara +2)
        else if(element.value == 1){
            energyCounter += 2
            
        }//Si llega value = 2 de el boton, indica sumar 1 de energia (El display sumara +1)
        else if (element.value == 2 ){
            energyCounter +=1
        }//Si llega value = 3 de el boton, indica restar 1 de energia (El display restara -1)
        else if (element.value == 3){
            energyCounter -=1
        }
        if(energyCounter>=10){
            energyCounter = 10
            displayEnergy.innerText = `${energyCounter} / 10`
        }else{
            displayEnergy.innerText = `${energyCounter} / 10`
        }
        
    });
    
}
allButtonsEnergy.forEach(element => {
    element.addEventListener('click', () =>{
        displayEnergy.innerText += 1
    })
});
buttonMinusEnergy.addEventListener('click')
'use strict'
const displayTool = document.getElementById('display-tool')
const buttons = document.getElementsByClassName('button-tool')
const inputSlp = document.getElementById('input-slp')
const addButton = document.getElementById('btn-add')
const svgArrow = document.getElementById('rotation')
const buttonTool = document.getElementById('boton-tool')

console.log(displayTool);
var valorActualSlp = 0
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    displayTool.innerText = 0
    element.addEventListener('click', function () {
        if (element.value == -1) {
            console.log("entro");
            valorActualSlp = 0;
            displayTool.innerText = 0
        }
        else if((valorActualSlp + parseInt(element.value)) <= 9999){
            valorActualSlp += parseInt(element.value)
            displayTool.innerText = valorActualSlp
        }else{
            valorActualSlp = 0;
            displayTool.innerText = 0
            valorActualSlp += parseInt(element.value)
            displayTool.innerText =valorActualSlp
        }
    })
    
}
addButton.addEventListener('click', function (){
    let input_Slp_Value = parseInt(inputSlp.value)
    if(input_Slp_Value){
        valorActualSlp += input_Slp_Value
        displayTool.innerText =valorActualSlp
    }
    if(valorActualSlp > 9999){
        valorActualSlp = 0;
        displayTool.innerText = 0
        valorActualSlp += input_Slp_Value
        displayTool.innerText = valorActualSlp
    }
})


buttonTool.addEventListener('click', function () {
    svgArrow.classList.toggle('flip')
    })
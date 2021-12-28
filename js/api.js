'use strict'

const axsData = document.getElementById('axs-price')
const slpData = document.getElementById('slp-price')
let respuesta ;
var values ;

var apikey = {
    key:'56cd2a07-9e6e-4bcf-9975-d03c0a36fc56'
}
function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}
request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=SLP,AXS&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
    respuesta = JSON.parse(r1.target.responseText);
    axsData.innerText += respuesta.data.AXS.quote.USD.price.toFixed(2)
    slpData.innerText += respuesta.data.SLP.quote.USD.price.toFixed(4)

}).then(()=>{
    console.log(respuesta);
    
    let arrowHTML = "<i class='fas fa-angle-up'></i>";
    let arrow_axs = document.getElementById('arrow-axs')
    let arrow_slp = document.getElementById('arrow-slp')
    console.log(respuesta.data.AXS.quote.USD.percent_change_24h);
    if (respuesta.data.AXS.quote.USD.percent_change_24h > 0) {

        arrow_axs.classList.add("arrow-up");
        arrow_axs.innerHTML = arrowHTML

    }else{

       arrow_axs.classList.add("arrow-down");
       arrow_axs.innerHTML = arrowHTML
    }
    if(respuesta.data.SLP.quote.USD.percent_change_24h > 0){
        arrow_slp.classList.add("arrow-up");
        arrow_slp.innerHTML = arrowHTML
    }else{
        arrow_slp.classList.add("arrow-down");
        arrow_slp.innerHTML = arrowHTML
    }
    

}).catch(err => {
    console.log(err);
})




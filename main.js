const valuteUSD = document.querySelector('[data-value="USD"]');
const valuteEUR = document.querySelector('[data-value="EUR"]');
const valuteGBP = document.querySelector('[data-value="GBP"]');
const valuteKGS = document.querySelector('[data-value="KGS"]');

const select = document.querySelector('#select');

const input = document.querySelector('#input');
const resultInput = document.querySelector('#result');

console.log(result)

// console.log(valuteEUR)

const rate = {};

async function convert() {
    const responce = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = responce.json()
    const result  = await data;

    rate.USD = result.Valute.USD
    rate.KGS = result.Valute.KGS
    rate.EUR = result.Valute.EUR
    rate.GBP = result.Valute.GBP

    valuteUSD.innerText = (rate.USD.Value.toFixed(2));
    valuteEUR.innerText = (rate.EUR.Value.toFixed(2));
    valuteKGS.innerText = (rate.KGS.Value.toFixed(2));
    valuteGBP.innerText = (rate.GBP.Value.toFixed(2));

    if(rate.USD.Value > rate.USD.Previous) {
        valuteUSD.style.color = 'red';
    } else if (rate.USD.Value < rate.USD.Previous) {
        valuteUSD.style.color = 'green';
    } else {
        valuteUSD.style.color = 'black';
    }

    if(rate.EUR.Value > rate.EUR.Previous) {
        valuteEUR.style.color = 'red';
    } else if (rate.EUR.Value < rate.EUR.Previous) {
        valuteEUR.style.color = 'green';
    } else {
        valuteEUR.style.color = 'black';
    }

    if(rate.GBP.Value > rate.GBP.Previous) {
        valuteGBP.style.color = 'red';
    } else if (rate.GBP.Value < rate.GBP.Previous) {
        valuteGBP.style.color = 'green';
    } else {
        valuteGBP.style.color = 'black';
    }

    if(rate.KGS.Value > rate.KGS.Previous) {
        valuteKGS.style.color = 'red';
    } else if (rate.KGS.Value < rate.KGS.Previous) {
        valuteKGS.style.color = 'green';
    } else {
        valuteKGS.style.color = 'black';
    }


    console.log(result)

    
}
convert()

input.oninput = calculate;
select.oninput = calculate;


function calculate() {
    resultInput.value = (input.value / rate[select.value].Value).toFixed(2)
}






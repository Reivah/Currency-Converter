
const baseAmount = document.querySelector('.base-amount')
const baseCurrency = document.getElementById('base-currency')
const targetCurrency = document.getElementById('target-currency')
const swapBtn = document.querySelector('.swap')
const converterBtn = document.querySelector('.btn-convert')
const rateInfo = document.querySelector('.rate-info')
const resultInput = document.getElementById('result-input')

const exchange = () => {
    fetch(`https://api.getgeoapi.com/v2/currency/convert?api_key=702e9a756b545ec5aec1f52046590a04f30665dd&from=${baseCurrency.value}&to=${targetCurrency.value}&format=json`)
    .then((Respone) => Respone.json())
    .then((data) => {
        const baseCurr = baseCurrency.value;
        const targetCurr = targetCurrency.value
        const rate = data.rates[targetCurr].rate

        rateInfo.textContent = `1 ${baseCurr} = ${rate} ${targetCurr}`

        resultInput.value = `${(baseAmount.value *rate).toFixed(2)} ${targetCurr}`
        console.log(rate);
        console.log(data);
    })
    .catch((error) => console.log(error))

}

swapCurrency = () => {
    const valueZero = baseCurrency.value
    baseCurrency.value = targetCurrency.value
    targetCurrency.value = valueZero
}


converterBtn.addEventListener('click', exchange)
swapBtn.addEventListener('click', swapCurrency)
exchange()

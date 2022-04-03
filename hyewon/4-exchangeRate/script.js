const $firstSelect = document.getElementById('currency-one')
const $secondSelect = document.getElementById('currency-two')
const $rate = document.getElementById('rate')
const $amount1 = document.getElementById('amount-one')
const $amount2 = document.getElementById('amount-two')

calculate()

function calculate() {
    const firstCountry = $firstSelect.options[$firstSelect.selectedIndex].value
    const secondCountry = $secondSelect.options[$secondSelect.selectedIndex].value

    fetch("https://v6.exchangerate-api.com/v6/0c8fbd2c3ca43caf99612cff/latest/USD")
        .then((response) => { return response.json() })
        .then((response) => {
            const rate = ((response.conversion_rates[secondCountry]) / (response.conversion_rates[firstCountry])).toFixed(3)
            $rate.textContent = `1 ${firstCountry} = ${rate} ${secondCountry}`
            $amount2.value = (parseFloat($amount1.value) * rate).toFixed(2)
        })
}

function swap() {
    const firIndex = $firstSelect.selectedIndex
    const secIndex = $secondSelect.selectedIndex
    $firstSelect.options[secIndex].selected = true
    $secondSelect.options[firIndex].selected = true
    [$firstSelect, $secondSelect] = [$secondSelect, $firstSelect]
    calculate()
}
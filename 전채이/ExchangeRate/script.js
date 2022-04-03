const $currencyOne = document.querySelector("#currency-one");
const $currencyTwo = document.querySelector("#currency-two");
const $amountOne = document.querySelector("#amount-one");
const $amountTwo = document.querySelector("#amount-two");
const $swap = document.querySelector("#swap");
const $rate = document.querySelector("#rate");

$amountOne.addEventListener("change", changeAmountOne);
$currencyOne.addEventListener("change", changeCurrencyOne);
$currencyTwo.addEventListener("change", changeCurrencyTwo);
$swap.addEventListener("click", handleSwap);

let amountOneValue = $amountOne.value;
let currencyOneValue = $currencyOne.options[$currencyOne.selectedIndex].value;
let currencyTwoValue = $currencyTwo.options[$currencyTwo.selectedIndex].value;

function changeAmountOne() {
  amountOneValue = $amountOne.value;
  setResultValue(currencyOneValue, currencyTwoValue);
}
function changeCurrencyOne() {
  currencyOneValue = $currencyOne.value;
  setResultValue(currencyOneValue, currencyTwoValue);
}
function changeCurrencyTwo() {
  currencyTwoValue = $currencyTwo.value;
  setResultValue(currencyOneValue, currencyTwoValue);
}
function handleSwap() {
  const temp = currencyOneValue;
  $currencyOne.value = currencyTwoValue;
  $currencyTwo.value = currencyOneValue;
  currencyOneValue = currencyTwoValue;
  currencyTwoValue = temp;
  setResultValue(currencyOneValue, currencyTwoValue);
}
function setResultValue(currencyOneValue, currencyTwoValue) {
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneValue}`)
    .then((rest) => rest.json())
    .then((data) => {
      $rate.textContent = `1 ${currencyOneValue} = ${data.rates[currencyTwoValue]} ${currencyTwoValue}`;
      $amountTwo.value = (
        data.rates[currencyTwoValue] * amountOneValue
      ).toFixed(2);
    });
}

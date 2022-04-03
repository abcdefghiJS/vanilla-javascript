## Exchange Rate

Select countries to get the exchange rate for a specific amount

## Project Specifications

- Display UI with 2 select lists for countries and 2 inputs for amounts
- Fetch exchange rates from API (https://api.exchangerate-api.com)
- Display the values for both countries
- Update values on amount change
- Swap country rates

## Functions

- changeAmountOne, changeCurrencyOne, changeCurrencyTwo : 바뀐 값을 해당 전역 변수에 담는 역할
- handleSwap : 두 통화 값을 서로 바꾸는 역할
- setResultValue : 환율을 업데이트하는 역할

## Memo

처음에 코드를 짤 때는 select, input 값이 바뀔 때마다 setResultValue 함수를 호출해서 이 함수 안에서 모든 변수를 다시 받아와 환율을 나타내게 했는데 이렇게 하니 바뀐 값만 새로 가져오는 것이 아니라 바뀌지 않은 값도 매번 가져오게 되니 효율적이지 않다고 생각해서 코드를 고침.
각 값을 담을 전역 변수를 선언해서 값이 바뀌면 전역 변수에 값을 할당하고 setResultValue 함수에 인자를 넘겨줘서 환율을 나타내게 함.

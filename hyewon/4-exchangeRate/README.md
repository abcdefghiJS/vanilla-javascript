# 목차
- `fetch()`
- swap

## `fetch()`
- - -
- Fetch API 를 이용하면 Request/Response 를 조작하는 것이 가능하다.
- fetch() 메소드는 첫번째 인자로 URL, 두번째 인자로 option 객체를 받고, Promise 객체를 반환한다. <br />
반환된 객체는 API 호출이 성공했을 경우에는 response 객체를 resolve 하고, 실패했을 경우에는 error 객체를 reject 한다.

### 내 코드
```javascript
fetch("https://v6.exchangerate-api.com/v6/0c8fbd2c3ca43caf99612cff/latest/USD")
    .then((response) => { return response.json() })
    .then((response) => {
        // 생략
    })
```
그런데 왜 첫번째 then() 에서 바로 response.json() 을 사용하지 않고 그 다음 then() 으로 넘겨줘야만 하는지 잘 모르겠다... 

## swap
- - -
```javascript
//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//using destructuring assignment
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
```
↑ 구조 분해 할당을 이용한 변수 값 교환

### 내 코드
```javascript
function swap() {
    const firIndex = $firstSelect.selectedIndex
    const secIndex = $secondSelect.selectedIndex
    $firstSelect.options[secIndex].selected = true
    $secondSelect.options[firIndex].selected = true
    [$firstSelect, $secondSelect] = [$secondSelect, $firstSelect]
    calculate()
}
```

## 참조
- - -
- `fetch()` <br />
https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch <br />
https://developer.mozilla.org/en-US/docs/Web/API/fetch <br />
https://www.daleseo.com/js-window-fetch/ <br />
- swap <br />
https://www.programiz.com/javascript/examples/swap-variables <br />
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment <br />
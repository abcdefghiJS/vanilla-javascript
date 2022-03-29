# 리뷰 👀

## 폴더 구조

```
├── src
│   ├── controller/
│   │   └── index.js                        - model과 view를 연결
│   ├── model/
│   │   └── index.js                        - 데이터 저장소
│   │
│   ├── view/
│   │   ├── index.js                        - 모든 view들의 init 지점
│   │   ├── movieSeatView.js                - 영화 좌석을 나타내는 view
│   │   ├── resultView.js                   - 좌석 개수와 영화 가격을 나타내는 view
│   │   ├── selectMovieView.js              - 영화를 선택하는 view
│   │   └── showCaseView.js                 - 영화 좌석 종류를 나타내는 view
│   ├── lib/
│   │   ├── util
│   │   │    ├── dom.js                     - dom selector 함수
│   │   │    ├── localStorage.js            - localStorage의 getter, setter
│   │   │    └──setInitialMovieSeatList.js  - 처음 렌더링시 영화 좌석의 타입을 설정하는 함수
│   │   └── constants.js                    - 상수
│   └── app.js                              - 어플리케이션의 init 지점
├── index.html
├── style.css
├── README.md
└── Specification.md
```

## View의 분리

```
화면에 렌더링될 요소들이 하는 일이 나눠져 있다고 생각하여 view를 나누었다.
1. 영화를 선택하는 view
2. 좌석의 역할을 나타내는 view
3. 영화 좌석을 나타내는 view
4. 영화 예매 좌석 개수와 총 가격을 나타내는 view
```

### resultView

- selecteMovieView에서 영화를 선택하고 selectMovieView에서 영화 좌석을 선택하면 화면에 렌더링될 요소가 바뀌어야 한다. 따라서 다음과 같은 메서드를 만들었다.

```javascript
changeTotalPrice(total) {
    const $total = $("#total");
    $total.textContent = total;
}

changeTotalCount(count) {
    const $count = $("#count");
    $count.textContent = count;
}
```

<br />

### 값의 변화가 없는 View

- 값의 변화가 없는 View의 경우에는 template 변수에 기본 html 템플릿을 저장하고, initView에서 렌더링 하는 방식을 사용했다.
  <br />
  <br />

### 값의 변화가 있는 View

- 첫 렌더링에서 값의 변화가 있어야 하는 View의 경우 render 메서드를 만들어서 기본 값을 세팅하고 해당 render 메서드를 호출했다.
  <br />
  <br />

### insertAdjacentHTML

- HTML 혹은 XML 같은 특정 텍스트를 파싱하고, 특정 위치에 DOM tree 안에 원하는 node들을 추가한다. 이미 사용중인 element는 다시 파싱하지 않는다. 그러므로 element 안에 존재하는 element를 건드리지 않는다. innerHTML보다 빠르다.
  <br />
  <br />

```javascript
element.insertAdjacentHTML(position, text);
```

- position
  - beforebegin -> element 앞에
  - afterbegin -> element 안에 가장 첫번째 child
  - beforeend -> element 안에 가장 마지막 child
  - afterend -> element 뒤에

```javascript
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

<br />

### insertAdjacentHTML vs innerHTML

- innerHTML

  - 기존 내용을 변경하는 것이 아닌, 새롭게 덮어씌운다.
  - XSS 공격에 노출된다.
  - 성능면에서 좋지 못하다.

- insertAdjacentHTML
  - 기존 요소에 새로운 요소를 추가하는 방식이다.
  - innerHTML에 비해서 성능이 빠르다.
- 기존 내용을 변경하는 것이 아니라면 innerHTML을 쓰고, 기존 내용을 변경하는 것이라면 insertAdjacentHTML을 사용하면 되겠다. 그러나 innerHTML이 할 수 있는 일을 insertAdjacentHTML이 할 수 있기 때문에, 가급적 insertAdjacentHTML을 사용해야겠다.

## Model

- 이전에는 모든 변수를 public하게 설정해서 외부에서 해당 클래스의 값을 변경 할 수 있었다. 하지만 모든 변수가 public한 경우, 값이 잘못 수정 되었을 때 어디서 변경을 요청했는지 찾기 어려울 수 있다고 생각해서 private 변수를 사용했다.

### Private

- 자바스크립트에서는 클래스에서 private 변수를 선언하는 경우 #을 사용한다.
- getter와 setter로만 private 변수에 접근할 수 있다.

```javascript
class Model {
    #moviePrice = 0;
    ...

    get moviePrice() {
        return this.#moviePrice;
    }

    set moviePrice(price) {
        this.#moviePrice = price;
    }
}

const model = new Model();

model.moviePrice = 500;
console.log(model.moviePrice); // 500
```

## Controller

- model과 view의 관심사를 분리하고자 하였다.

### init

```javascript
init() {
    setInitialMovieSeatList(this.model.selectedMovieSeatList);

    const $selectBox = $("#movie");
    $selectBox.options["selectedIndex"] = this.model.selectedMovieIndex;

    const count = this.model.selectedMovieSeatList?.length ?? 0;
    const moviePrice = this.model.moviePrice;
    const total = moviePrice * count;

    this.view.resultView.renderResultView({
      count,
      total,
    });
    this.view.movieSeatView.renderMovieSeat();
}
```

- model에 대한 데이터 처리가 끝난 이후에 view를 렌더링 하는 방식으로 진행했다.
- controller에 view에 필요한 model의 데이터 처리 값을 저장하고 view에 넘겨주는 방식으로 구성하여 view가 모델의 값에 직접적으로 접근할 수 없게 하였다.

### data-set

- 좌석 번호에 대해 알기 위해서 data-set을 활용해서 각 좌석에 좌석 번호를 부여했다.

```javascript
`
    <div class="seat ${
      (isOccupied === 1 && `occupied`) || (isOccupied === 2 && `selected`) || ``
    }" data-index=${reducedIndex}>
    </div>`;
```

- javascript에서 data-set에 접근하기

```javascript
const movieSeat = document.querySelector(".seat");
const movieSeatNumber = movieSeat.dataset.index;
```

- CSS에서 data-set에 접근하기

```css
seat::before {
  content: attr(data-index);
}

seat[data-index="2"] {
  background-color: red;
}
```

### toggle

- DOMTokenList에 사용할 수 있는 메서드이다.

```javascript
toggle(String, [, force]);
```

- 하나의 인수만 있는 경우, 클래스 값을 토글링한다. 해당 클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않는 경우면 클래스를 추가하고 true를 반환한다.
- 두번째 인수가 있는 경우, 두번째 인수가 true를 반환하면 첫번째 인수를 클래스에 추가하고 false를 반환하면 제거한다.

```javascript
div.classList.toggle("visible", i < 10); // i가 10보다 작은 경우에 visible을 class에 추가한다.
```

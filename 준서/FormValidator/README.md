# 리뷰 👀

## 리팩터링

기존에 index.js에서 전부 작성했던 코드를 리팩터링 하였다. 그 이유는 조그만 구조에서는 한 파일 내에서 다 작성해도 문제가 되지 않으나, 유지보수와 확장이 어렵기 때문에 새로운 구조로 수정하였다. 나름대로 MVC 패턴을 지키기 위해 노력했다.

<hr />

## 폴더 구조

```
├── src
│   ├── app/
│   │   ├── controller/
│   │   │    ├── index.js               - model과 view를 연결
│   │   ├── model/
│   │   │    ├── index.js               - input 값 관리
│   │   └── view/
│   │        └── index.js               - 화면에 렌더링 될 요소
│   ├── lib/
│   │   ├── util
│   │   │    └── dom.js                 - dom selector 함수
│   │   └── constants.js                - 상수
│   ├── index.js                        - 리팩터링 이전 코드
│   └── main.js                         - index.html의 entry point
├── index.html
├── style.css
├── README.md
└── Specification.md
```

<hr />

## 이벤트 처리

### 리팩터링 이전

```javascript
const $input = $(target);
$input.addEventListener("input", ({ target: { value } }) => {
  const [_, targetGetter] = target.split("#");
  this.model[targetGetter] = value;
});
```

```javascript
const $button = $(button);
$button.addEventListener("click", (e) => this.submitInfo.bind());
```

```javascript
submitInfo(e) {
    // 내부 처리
}
```

### 리팩터링 이후

```javascript
addEvent(selector, eventType, callback) {
    const $selector = $(selector);
    $selector.addEventListener(eventType, (e) => callback(e));
}
```

```javascript
setEvent() {
    this.onClickSubmitButton("button");
    inputTargetList.forEach((target) => {
        this.onChangeInput(target);
    });
}
```

이전에는 하나씩 함수를 만들어서 이벤트를 각각 등록해줬다. 그러나 공통 요소 selector, eventType, callback 함수를 통해서 이벤트 연결 함수를 추상화 해서 리팩터링 했다. 모든 이벤트는 setEvent() 내부에서 설정해주고 처음 Controller가 호출 될 때 실행되게 설정했다.

<hr />

## $

dom에 접근하는 코드가 반복 되어서 돔에 관례적으로 $를 사용하기 때문에 $ 함수로 util로 추출했다.

```javascript
const $ = (selector) => document.querySelector(selector);
```

### 본문

https://jun5e00-dev-diary.tistory.com/8

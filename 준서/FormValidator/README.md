# λ¦¬λ·° π

## λ¦¬ν©ν°λ§

κΈ°μ‘΄μ index.jsμμ μ λΆ μμ±νλ μ½λλ₯Ό λ¦¬ν©ν°λ§ νμλ€. κ·Έ μ΄μ λ μ‘°κ·Έλ§ κ΅¬μ‘°μμλ ν νμΌ λ΄μμ λ€ μμ±ν΄λ λ¬Έμ κ° λμ§ μμΌλ, μ μ§λ³΄μμ νμ₯μ΄ μ΄λ ΅κΈ° λλ¬Έμ μλ‘μ΄ κ΅¬μ‘°λ‘ μμ νμλ€. λλ¦λλ‘ MVC ν¨ν΄μ μ§ν€κΈ° μν΄ λΈλ ₯νλ€.

<hr />

## ν΄λ κ΅¬μ‘°

```
βββ src
β   βββ app/
β   β   βββ controller/
β   β   β    βββ index.js               - modelκ³Ό viewλ₯Ό μ°κ²°
β   β   βββ model/
β   β   β    βββ index.js               - input κ° κ΄λ¦¬
β   β   βββ view/
β   β        βββ index.js               - νλ©΄μ λ λλ§ λ  μμ
β   βββ lib/
β   β   βββ util
β   β   β    βββ dom.js                 - dom selector ν¨μ
β   β   βββ constants.js                - μμ
β   βββ index.js                        - λ¦¬ν©ν°λ§ μ΄μ  μ½λ
β   βββ main.js                         - index.htmlμ entry point
βββ index.html
βββ style.css
βββ README.md
βββ Specification.md
```

<hr />

## μ΄λ²€νΈ μ²λ¦¬

### λ¦¬ν©ν°λ§ μ΄μ 

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
    // λ΄λΆ μ²λ¦¬
}
```

### λ¦¬ν©ν°λ§ μ΄ν

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

μ΄μ μλ νλμ© ν¨μλ₯Ό λ§λ€μ΄μ μ΄λ²€νΈλ₯Ό κ°κ° λ±λ‘ν΄μ€¬λ€. κ·Έλ¬λ κ³΅ν΅ μμ selector, eventType, callback ν¨μλ₯Ό ν΅ν΄μ μ΄λ²€νΈ μ°κ²° ν¨μλ₯Ό μΆμν ν΄μ λ¦¬ν©ν°λ§ νλ€. λͺ¨λ  μ΄λ²€νΈλ setEvent() λ΄λΆμμ μ€μ ν΄μ£Όκ³  μ²μ Controllerκ° νΈμΆ λ  λ μ€νλκ² μ€μ νλ€.

<hr />

## $

domμ μ κ·Όνλ μ½λκ° λ°λ³΅ λμ΄μ λμ κ΄λ‘μ μΌλ‘ $λ₯Ό μ¬μ©νκΈ° λλ¬Έμ $ ν¨μλ‘ utilλ‘ μΆμΆνλ€.

```javascript
const $ = (selector) => document.querySelector(selector);
```

### λ³Έλ¬Έ

https://jun5e00-dev-diary.tistory.com/8

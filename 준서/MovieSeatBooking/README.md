# λ¦¬λ·° π

## ν΄λ κ΅¬μ‘°

```
βββ src
β   βββ controller/
β   β   βββ index.js                        - modelκ³Ό viewλ₯Ό μ°κ²°
β   βββ model/
β   β   βββ index.js                        - λ°μ΄ν° μ μ₯μ
β   β
β   βββ view/
β   β   βββ index.js                        - λͺ¨λ  viewλ€μ init μ§μ 
β   β   βββ movieSeatView.js                - μν μ’μμ λνλ΄λ view
β   β   βββ resultView.js                   - μ’μ κ°μμ μν κ°κ²©μ λνλ΄λ view
β   β   βββ selectMovieView.js              - μνλ₯Ό μ ννλ view
β   β   βββ showCaseView.js                 - μν μ’μ μ’λ₯λ₯Ό λνλ΄λ view
β   βββ lib/
β   β   βββ util
β   β   β    βββ dom.js                     - dom selector ν¨μ
β   β   β    βββ localStorage.js            - localStorageμ getter, setter
β   β   β    βββsetInitialMovieSeatList.js  - μ²μ λ λλ§μ μν μ’μμ νμμ μ€μ νλ ν¨μ
β   β   βββ constants.js                    - μμ
β   βββ app.js                              - μ΄νλ¦¬μΌμ΄μμ init μ§μ 
βββ index.html
βββ style.css
βββ README.md
βββ Specification.md
```

## Viewμ λΆλ¦¬

```
νλ©΄μ λ λλ§λ  μμλ€μ΄ νλ μΌμ΄ λλ μ Έ μλ€κ³  μκ°νμ¬ viewλ₯Ό λλμλ€.
1. μνλ₯Ό μ ννλ view
2. μ’μμ μ­ν μ λνλ΄λ view
3. μν μ’μμ λνλ΄λ view
4. μν μλ§€ μ’μ κ°μμ μ΄ κ°κ²©μ λνλ΄λ view
```

### resultView

- selecteMovieViewμμ μνλ₯Ό μ ννκ³  selectMovieViewμμ μν μ’μμ μ ννλ©΄ νλ©΄μ λ λλ§λ  μμκ° λ°λμ΄μΌ νλ€. λ°λΌμ λ€μκ³Ό κ°μ λ©μλλ₯Ό λ§λ€μλ€.

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

### κ°μ λ³νκ° μλ View

- κ°μ λ³νκ° μλ Viewμ κ²½μ°μλ template λ³μμ κΈ°λ³Έ html ννλ¦Ώμ μ μ₯νκ³ , initViewμμ λ λλ§ νλ λ°©μμ μ¬μ©νλ€.
  <br />
  <br />

### κ°μ λ³νκ° μλ View

- μ²« λ λλ§μμ κ°μ λ³νκ° μμ΄μΌ νλ Viewμ κ²½μ° render λ©μλλ₯Ό λ§λ€μ΄μ κΈ°λ³Έ κ°μ μΈννκ³  ν΄λΉ render λ©μλλ₯Ό νΈμΆνλ€.
  <br />
  <br />

### insertAdjacentHTML

- HTML νΉμ XML κ°μ νΉμ  νμ€νΈλ₯Ό νμ±νκ³ , νΉμ  μμΉμ DOM tree μμ μνλ nodeλ€μ μΆκ°νλ€. μ΄λ―Έ μ¬μ©μ€μΈ elementλ λ€μ νμ±νμ§ μλλ€. κ·Έλ¬λ―λ‘ element μμ μ‘΄μ¬νλ elementλ₯Ό κ±΄λλ¦¬μ§ μλλ€. innerHTMLλ³΄λ€ λΉ λ₯΄λ€.
  <br />
  <br />

```javascript
element.insertAdjacentHTML(position, text);
```

- position
  - beforebegin -> element μμ
  - afterbegin -> element μμ κ°μ₯ μ²«λ²μ§Έ child
  - beforeend -> element μμ κ°μ₯ λ§μ§λ§ child
  - afterend -> element λ€μ

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

  - κΈ°μ‘΄ λ΄μ©μ λ³κ²½νλ κ²μ΄ μλ, μλ‘­κ² λ?μ΄μμ΄λ€.
  - XSS κ³΅κ²©μ λΈμΆλλ€.
  - μ±λ₯λ©΄μμ μ’μ§ λͺ»νλ€.

- insertAdjacentHTML
  - κΈ°μ‘΄ μμμ μλ‘μ΄ μμλ₯Ό μΆκ°νλ λ°©μμ΄λ€.
  - innerHTMLμ λΉν΄μ μ±λ₯μ΄ λΉ λ₯΄λ€.
- κΈ°μ‘΄ λ΄μ©μ λ³κ²½νλ κ²μ΄ μλλΌλ©΄ innerHTMLμ μ°κ³ , κΈ°μ‘΄ λ΄μ©μ λ³κ²½νλ κ²μ΄λΌλ©΄ insertAdjacentHTMLμ μ¬μ©νλ©΄ λκ² λ€. κ·Έλ¬λ innerHTMLμ΄ ν  μ μλ μΌμ insertAdjacentHTMLμ΄ ν  μ μκΈ° λλ¬Έμ, κ°κΈμ  insertAdjacentHTMLμ μ¬μ©ν΄μΌκ² λ€.

## Model

- μ΄μ μλ λͺ¨λ  λ³μλ₯Ό publicνκ² μ€μ ν΄μ μΈλΆμμ ν΄λΉ ν΄λμ€μ κ°μ λ³κ²½ ν  μ μμλ€. νμ§λ§ λͺ¨λ  λ³μκ° publicν κ²½μ°, κ°μ΄ μλͺ» μμ  λμμ λ μ΄λμ λ³κ²½μ μμ²­νλμ§ μ°ΎκΈ° μ΄λ €μΈ μ μλ€κ³  μκ°ν΄μ private λ³μλ₯Ό μ¬μ©νλ€.

### Private

- μλ°μ€ν¬λ¦½νΈμμλ ν΄λμ€μμ private λ³μλ₯Ό μ μΈνλ κ²½μ° #μ μ¬μ©νλ€.
- getterμ setterλ‘λ§ private λ³μμ μ κ·Όν  μ μλ€.

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

- modelκ³Ό viewμ κ΄μ¬μ¬λ₯Ό λΆλ¦¬νκ³ μ νμλ€.

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

- modelμ λν λ°μ΄ν° μ²λ¦¬κ° λλ μ΄νμ viewλ₯Ό λ λλ§ νλ λ°©μμΌλ‘ μ§ννλ€.
- controllerμ viewμ νμν modelμ λ°μ΄ν° μ²λ¦¬ κ°μ μ μ₯νκ³  viewμ λκ²¨μ£Όλ λ°©μμΌλ‘ κ΅¬μ±νμ¬ viewκ° λͺ¨λΈμ κ°μ μ§μ μ μΌλ‘ μ κ·Όν  μ μκ² νμλ€.

### data-set

- μ’μ λ²νΈμ λν΄ μκΈ° μν΄μ data-setμ νμ©ν΄μ κ° μ’μμ μ’μ λ²νΈλ₯Ό λΆμ¬νλ€.

```javascript
`
    <div class="seat ${
      (isOccupied === 1 && `occupied`) || (isOccupied === 2 && `selected`) || ``
    }" data-index=${reducedIndex}>
    </div>`;
```

- javascriptμμ data-setμ μ κ·ΌνκΈ°

```javascript
const movieSeat = document.querySelector(".seat");
const movieSeatNumber = movieSeat.dataset.index;
```

- CSSμμ data-setμ μ κ·ΌνκΈ°

```css
seat::before {
  content: attr(data-index);
}

seat[data-index="2"] {
  background-color: red;
}
```

### toggle

- DOMTokenListμ μ¬μ©ν  μ μλ λ©μλμ΄λ€.

```javascript
toggle(String, [, force]);
```

- νλμ μΈμλ§ μλ κ²½μ°, ν΄λμ€ κ°μ ν κΈλ§νλ€. ν΄λΉ ν΄λμ€κ° μ‘΄μ¬νλ€λ©΄ μ κ±°νκ³  falseλ₯Ό λ°ννλ©°, μ‘΄μ¬νμ§ μλ κ²½μ°λ©΄ ν΄λμ€λ₯Ό μΆκ°νκ³  trueλ₯Ό λ°ννλ€.
- λλ²μ§Έ μΈμκ° μλ κ²½μ°, λλ²μ§Έ μΈμκ° trueλ₯Ό λ°ννλ©΄ μ²«λ²μ§Έ μΈμλ₯Ό ν΄λμ€μ μΆκ°νκ³  falseλ₯Ό λ°ννλ©΄ μ κ±°νλ€.

```javascript
div.classList.toggle("visible", i < 10); // iκ° 10λ³΄λ€ μμ κ²½μ°μ visibleμ classμ μΆκ°νλ€.
```

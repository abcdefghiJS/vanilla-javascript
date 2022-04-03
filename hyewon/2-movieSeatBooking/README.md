# 목차
- local Storage
- innerText / innerHTML / textContent

## local Storage
- - -
- **Web Storage** 는 key - value 쌍으로 데이터를 저장하고 key 를 기반으로 데이터를 조회하는 패턴으로, 영구 저장소인 **'localStorage'** 와 임시 저장소인 **'sessionStorage'** 를 가지고 있다. <br />
- localStorage 는 sessionStorage 와 비슷하지만, localStorage 의 데이터는 만료되지 않고, sessionStorage 의 데이터는 페이지를 닫을 때 사라진다. <br />
- localStorage 의 key 와 value 는 반드시 <u>문자열</u>이어야 한다. (다른 자료형이 들어올 시 문자열로 자동 변환)

### 메소드
- - -
```javascript
// 데이터 저장
localStorage.setItem(key, value)

// 데이터 가져오기
localStorage.getItem(key)

// 특정 데이터 삭제
localStorage.removeItem(key)

// 모든 데이터 삭제
localStorage.clear()

// index 로 해당 key 받아오기
localStorage.key(index)

// 항목 개수 가져오기
localStorage.length
```

### 내 코드
- - -
```javascript
localStorage.setItem('value', movieValue)
```
```javascript
$select.value = localStorage.getItem('value')
```

## innerText / innerHTML / textContent
- - -
Node 나 Element 의 text 값을 읽어오고 설정할 수 있는 속성들

### innerText
- - -
- HTMLElement 속성
- 요소와 그 자손의 <u>렌더링된</u> 텍스트 콘텐츠
- 사용자에게 **보여지는** 텍스트 값만 읽어옴

### innerHTML
- - -
- Element 속성
- 요소 내에 포함된 HTML 또는 XML 마크업을 가져오거나 설정함

### textContent
- - -
- Node 속성
- 노드와 그 자손의 텍스트 콘텐츠
- innerText 와 달리 `<script>` 와 `<style>` 요소를 포함한 모든 요소의 콘텐츠를 가져온다.
- innerHTML 에 비해 성능이 좋고, XSS 공격의 위험이 없다.

### 내 코드
- - -
```javascript
$count.textContent = localStorage.getItem('count')
$total.textContent = localStorage.getItem('total')
```

## 참조
- - -
- local Storage <br />
https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage <br />
https://ko.javascript.info/localstorage <br />
https://coding-restaurant.tistory.com/294
- innerText / innerHTML / textContent <br />
https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/innerText <br />
https://developer.mozilla.org/ko/docs/Web/API/Element/innerHTML <br />
https://developer.mozilla.org/ko/docs/Web/API/Node/textContent <br />
https://hianna.tistory.com/483 <br />
https://ninetynine-2026.tistory.com/509


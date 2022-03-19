const $container = document.querySelector('.container')
const $seats = document.querySelectorAll('.row .seat')
let $select = document.getElementById('movie')
let $selectIndex = document.getElementById('movie').options.selectedIndex
let v = $select.options[$selectIndex].value
const $count = document.getElementById('count')
const $total = document.getElementById('total')

if(localStorage.getItem('value') === null) {
    localStorage.setItem('value', v)
}
populateUI()

// 선택된 좌석 상태를 보여주는 함수
function showSelected(seat) {
    if(seat.className === "seat") {
        seat.className = "seat selected"
    } else if (seat.className === "seat selected") {
        seat.className = "seat"
    }
}

// 선택된 좌석 수와 총 가격을 보여주는 함수
function stateChange(seat) {
    if(seat.className === "seat selected"){
        $count.innerText = parseInt($count.innerText) + 1
        $total.innerText = parseInt($total.innerText) + parseInt(v)
        localStorage.setItem('count', $count.innerText)
        localStorage.setItem('total', $total.innerText)
    } else if(seat.className === "seat") {
        $count.innerText = parseInt($count.innerText) - 1
        $total.innerText = parseInt($total.innerText) - parseInt(v)
        localStorage.setItem('count', $count.innerText)
        localStorage.setItem('total', $total.innerText)
    }
}

// 영화 옵션(종류)을 변경할 시 호출되는 함수
function movieSelect() {
    $select = document.getElementById('movie')
    $selectIndex = document.getElementById('movie').options.selectedIndex

    v = $select.options[$selectIndex].value // 가격을 계산하기 위해 value 값 저장

    // 영화 종류에 따라 총 가격이 다르게 계산되어야 함
    if($count.innerText !== "0") {
        $total.innerText = parseInt(v) * parseInt($count.innerText)
        localStorage.setItem('total', $total.innerText)
    }

    localStorage.setItem('value', v)
}

// 선택된 좌석 상태를 local storage 에 업데이트 해주는 함수
function update() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedIndex = [...selectedSeats].map((seat) => [...$seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(selectedIndex))
}

// 새로 고침 시, 저장소에 저장되어 있는 정보를 불러오는 함수
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    if (selectedSeats !== null && selectedSeats.length > 0) {
        $seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.className = "seat selected"
            }
        })
        $count.innerText = localStorage.getItem('count')
        $total.innerText = localStorage.getItem('total')
    }
    $select.value = localStorage.getItem('value')
    movieSelect()
}

$container.addEventListener('click', e => {
    showSelected(e.target)
    stateChange(e.target)
    update()
    console.log(window.localStorage)
})
let selectedSeatNum = 0;
let selectedMoviePrice = 10;

const defaultSelectedSeat = [2, 10];
const defaultOccupiedSeat = [12, 13, 23, 24, 37, 38, 39];

const $seatContainer = document.querySelector(".seatContainer");

makeSeatContainer([2, 4, 2], 6);

const $select = document.querySelector("select");
const $seatAll = $seatContainer.querySelectorAll(".seat");
const $selectedSeatNumSpan = document.querySelector("#selectedSeatNum");
const $priceSpan = document.querySelector("#price");

$select.addEventListener("change", changeSelect);
$seatAll.forEach((seat) => seat.addEventListener("click", clickSeat));

setDefaultSeatContainer();

// 영화 좌석 만드는 함수
function makeSeatContainer(colNumArr, row) {
  for (let i = 0; i < row; i++) {
    makeSeatLine(colNumArr);
    const $br = document.createElement("br");
    $seatContainer.appendChild($br);
  }
}

// 좌석 한 줄 만드는 함수
function makeSeatLine(colNumArr) {
  colNumArr.forEach((colNum, index) => {
    for (let i = 0; i < colNum; i++) {
      const $seat = document.createElement("div");
      $seat.classList.add("seat", "available");
      $seatContainer.appendChild($seat);
    }
    index !== colNumArr.length - 1 ? makeBlank() : "";
  });
}

// 좌석 사이 빈 공간 만드는 함수
function makeBlank() {
  const $seat = document.createElement("div");
  $seat.classList.add("blank");
  $seatContainer.appendChild($seat);
}

function changeSelect() {
  selectedMoviePrice = event.target.value;
  setPrice();
}
function clickSeat() {
  const $seat = event.target;
  if ($seat.classList.contains("available")) {
    setSelected($seat);
    return;
  }
  if ($seat.classList.contains("selected")) {
    setAvailable($seat);
    return;
  }
}
function setDefaultSeatContainer() {
  $seatAll.forEach((seat, index) => {
    if (defaultSelectedSeat.includes(index)) {
      setSelected(seat);
      return;
    }
    if (defaultOccupiedSeat.includes(index)) {
      setOccupied(seat);
    }
  });
}
function setAvailable(seat) {
  if (seat.classList.contains("selected")) {
    selectedSeatNum--;
  }
  seat.className = "seat available";
  setSelectedSeatNum();
  setPrice();
}
function setSelected(seat) {
  seat.className = "seat selected";
  selectedSeatNum++;
  setSelectedSeatNum();
  setPrice();
}
function setOccupied(seat) {
  seat.className = "seat occupied";
}

function setSelectedSeatNum() {
  $selectedSeatNumSpan.textContent = selectedSeatNum;
}
function setPrice() {
  $priceSpan.textContent = selectedSeatNum * selectedMoviePrice;
}

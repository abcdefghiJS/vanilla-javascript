const $movieSelect = document.getElementById('movie');
const $seats = document.querySelectorAll('.row .seat:not(.occupied)');

const $seatsCountNum = document.getElementById('count');
const $totalCost = document.getElementById('total');

let seatsCountNum = Number($seatsCountNum.textContent);
let moviePriceNum = Number($movieSelect.value);

const onClickSeats = ($seat) => {
  if (!$seat.classList.contains('selected')) {
    $seat.classList.add('selected');
    $seatsCountNum.textContent = ++seatsCountNum;
    $totalCost.textContent = seatsCountNum * moviePriceNum;
    return;
  }
  $seat.classList.remove('selected');
  $seatsCountNum.textContent = --seatsCountNum;
  $totalCost.textContent = seatsCountNum * moviePriceNum;
};

$movieSelect.addEventListener('click', (e) => {
  moviePriceNum = Number(e.target.value);
  $totalCost.textContent = seatsCountNum * moviePriceNum;
});

$seats.forEach(($seat) => {
  $seat.addEventListener('click', () => onClickSeats($seat));
});

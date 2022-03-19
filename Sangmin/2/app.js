const movieContainer = document.querySelector(".container");
const clickCount = document.querySelector("#count");
const totalPrice = document.querySelector("#total");

let count = 0;
let price = 10;

const seatClick = (e) => {
  if (e.target.className === "seat") {
    e.target.classList.add("selected");
    showValue(++count, price);
    return;
  }
  if (e.target.className === "seat selected") {
    e.target.classList.remove("selected");
    showValue(--count, price);
    return;
  }
};

const showValue = (count, price) => {
  clickCount.innerHTML = count;
  totalPrice.innerHTML = count * price;
};

const ChangeMovie = (e) => {
  price = Number(e.value);
  showValue(count, price);
};

movieContainer.addEventListener("click", seatClick);

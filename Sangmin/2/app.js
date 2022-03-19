const container = document.querySelector(".container");
const seat = document.querySelectorAll(".row .seat");
const count = document.querySelector("#count");
const total = document.querySelector("#total");

let counting = 0;
let price = 10;

const seatClick = (e) => {
  if (e.target.className === "seat") {
    e.target.classList.add("selected");
    counting++;
    count.innerHTML = counting;
    total.innerHTML = counting * price;
    return;
  }
  if (e.target.className === "seat selected") {
    e.target.classList.remove("selected");
    counting--;
    count.innerHTML = counting;
    total.innerHTML = counting * price;
    return;
  }
};

const handleOnChange = (e) => {
  price = Number(e.value);
  count.innerHTML = counting;
  total.innerHTML = counting * price;
};

container.addEventListener("click", seatClick);

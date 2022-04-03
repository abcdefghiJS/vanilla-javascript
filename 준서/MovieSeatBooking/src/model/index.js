import { getLocalStorage, setLocalStorage } from "../lib/util/localStorage.js";

class Model {
  #moviePrice = 0;
  #selectedMovieIndex = 0;
  #selectedMovieSeatList = [];

  constructor() {
    this.init();
  }

  init() {
    this.moviePrice = Number(getLocalStorage("moviePrice"));
    this.selectedMovieIndex = Number(getLocalStorage("selectedMovieIndex"));
    this.selectedMovieSeatList = JSON.parse(getLocalStorage("seatList"));
  }

  get moviePrice() {
    return this.#moviePrice;
  }

  get selectedMovieIndex() {
    return this.#selectedMovieIndex;
  }

  get selectedMovieSeatList() {
    return this.#selectedMovieSeatList;
  }

  set moviePrice(price) {
    this.#moviePrice = price;
    setLocalStorage("moviePrice", this.#moviePrice);
  }

  set selectedMovieIndex(index) {
    this.#selectedMovieIndex = index;
    setLocalStorage("selectedMovieIndex", this.#selectedMovieIndex);
  }

  set selectedMovieSeatList(seatList) {
    this.#selectedMovieSeatList = seatList;
    setLocalStorage("seatList", JSON.stringify(this.#selectedMovieSeatList));
  }
}

export default Model;

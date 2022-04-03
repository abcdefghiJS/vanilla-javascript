import { movieSeatList } from "../lib/constants.js";

class MovieSeatView {
  #target = null;

  constructor(target) {
    this.#target = target;
  }

  renderMovieSeat() {
    let reducedIndex = -1;

    this.#target.insertAdjacentHTML(
      "beforeend",
      `<div class="container">
      <div class="screen"></div>
        ${movieSeatList
          .map(
            (list) => `<div class="row">
            ${list
              .map((isOccupied) => {
                reducedIndex++;
                return `
                    <div class="seat ${
                      (isOccupied === 1 && `occupied`) ||
                      (isOccupied === 2 && `selected`) ||
                      ``
                    }" data-index=${reducedIndex}>
                    </div>`;
              })
              .join("")}
        </div>`
          )
          .join("")}
    </div>`
    );
  }
}

export default MovieSeatView;

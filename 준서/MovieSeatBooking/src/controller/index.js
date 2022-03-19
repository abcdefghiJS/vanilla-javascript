import { $, $$ } from "../lib/util/dom.js";
import setInitialMovieSeatList from "../lib/util/setInitialMovieSeatList.js";

class Controller {
  constructor({ view, model }) {
    this.view = view;
    this.model = model;
    this.init();
    this.setEvent();
  }

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

  setEvent() {
    this.onChangeSelectMovie($("#movie"));
    this.onClickMovieSeat();
  }

  addEvent(selector, eventType, callback) {
    selector.addEventListener(eventType, (e) => callback(e));
  }

  onChangeSelectMovie(selector) {
    this.addEvent(selector, "change", (e) => {
      this.model.moviePrice = e.target.value;
      this.model.selectedMovieIndex = e.target.selectedIndex;
      this.view.resultView.changeTotalPrice(
        this.model.moviePrice * this.model.selectedMovieSeatList.length
      );
    });
  }

  onClickMovieSeat() {
    const $$row = $$(".row");
    $$row.forEach((row) => {
      Array.from(row.children).forEach((child) => {
        const className = child.getAttribute("class").trim();
        if (className === "seat occupied") {
          return;
        }

        child.addEventListener("click", (e) => {
          const className = child.getAttribute("class").trim();
          const selectedMovieSeatList = this.model.selectedMovieSeatList;
          const clickedSeatNumber = Number(e.target.dataset.index);

          if (className === "seat") {
            if (this.model.selectedMovieSeatList) {
              this.model.selectedMovieSeatList = [
                ...selectedMovieSeatList,
                clickedSeatNumber,
              ];
            }

            if (this.model.selectedMovieSeatList === null) {
              this.model.selectedMovieSeatList = [clickedSeatNumber];
            }
          }

          if (className === "seat selected") {
            const targetIndex = selectedMovieSeatList.findIndex(
              (seatNumber) => seatNumber === clickedSeatNumber
            );
            selectedMovieSeatList.splice(targetIndex, 1);
            this.model.selectedMovieSeatList = selectedMovieSeatList;
          }

          // 공통 로직
          e.target.classList.toggle("selected");

          const count = this.model.selectedMovieSeatList.length;
          const moviePrice = this.model.moviePrice;
          const total = moviePrice * count;

          this.view.resultView.changeTotalPrice(total);
          this.view.resultView.changeTotalCount(count);
        });
      });
    });
  }
}

export default Controller;

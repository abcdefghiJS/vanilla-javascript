import SelectMovieView from "./selectMovieView.js";
import ShowCaseView from "./showCaseView.js";
import MovieSeatView from "./movieSeatView.js";
import ResultView from "./resultView.js";

class View {
  selectView = null;
  showCaseView = null;
  movieSeatView = null;
  resultView = null;

  constructor(target) {
    this.selectView = new SelectMovieView(target);
    this.showCaseView = new ShowCaseView(target);
    this.movieSeatView = new MovieSeatView(target);
    this.resultView = new ResultView(target);
  }
}

export default View;

import { $ } from "../lib/util/dom.js";

class ResultView {
  #target = null;

  constructor(target) {
    this.#target = target;
  }

  renderResultView({ count, total }) {
    this.#target.insertAdjacentHTML(
      "beforeend",
      `
            <p class="text">
                You have selected <span id="count">${count}</span> seats for a price of
                <span id="total">${total}</span>
            </p>
        `
    );
  }

  changeTotalPrice(total) {
    const $total = $("#total");
    $total.textContent = total;
  }

  changeTotalCount(count) {
    const $count = $("#count");
    $count.textContent = count;
  }
}

export default ResultView;

class ShowCaseView {
  #target = null;

  constructor(target) {
    this.#target = target;
    this.initView();
  }

  #template = `
      <ul class="showcase">
        <li>
          <div class="seat"></div>
          <small>N/A</small>
        </li>
        <li>
          <div class="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div class="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>`;

  initView() {
    this.#target.insertAdjacentHTML("beforeend", this.#template);
  }
}

export default ShowCaseView;

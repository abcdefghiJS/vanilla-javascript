import { $ } from "../../lib/util/dom.js";

class View {
  constructor() {
    this.$target = $("#app");
    this.initView();
  }

  initView() {
    this.$target.innerHTML = `
        <div class="wrapper">
            <form class="form">
                <h2>Register With Us</h2>
                <div class="form-validate">
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" />
                    <small>Error Message</small>
                </div>
                <div class="form-validate">
                    <label for="email">Email</label>
                    <input type="text" id="email" placeholder="Enter email" />
                    <small>Error Message</small>
                </div>
                <div class="form-validate">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" />
                    <small>Error Message</small>
                </div>
                <div class="form-validate">
                    <label for="password2">Confirm Password</label>
                    <input
                        type="password"
                        id="password2"
                        placeholder="Enter password again"
                    />
                    <small>Error Message</small>
                </div>
                <button>submit</button>
            </form>
        </div>
        `;
  }
}

export default View;

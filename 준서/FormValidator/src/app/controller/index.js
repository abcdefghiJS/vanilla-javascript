import { $ } from "../../lib/util/dom.js";
import { inputTargetList, emailRegExp } from "../../lib/constants.js";

class Controller {
  constructor(model) {
    this.model = model;
    this.setEvent();
  }

  setEvent() {
    this.addSubmitEvent("button");
    this.addOnChangeEvent(inputTargetList);
  }

  addEvent(selector, eventType, callback) {
    const $selector = $(selector);
    $selector.addEventListener(eventType, (e) => callback(e));
  }

  addSubmitEvent(selector) {
    this.addEvent(selector, "click", (e) => {
      this.submitInfo(e);
    });
  }

  addOnChangeEvent(selector) {
    selector.forEach((target) => {
      this.onChangeInput(target);
    });
  }

  onChangeInput(selector) {
    this.addEvent(selector, "input", ({ target: { value } }) => {
      const [_, selectorGetter] = selector.split("#");
      this.model[selectorGetter] = value;
    });
  }

  validate(selector, callback) {
    const $selector = $(selector);
    const formController = $selector.parentNode;
    callback(formController);
  }

  validateUsername() {
    this.validate("#username", (formController) => {
      if (this.model._username.length < 3) {
        this.setError(formController, "Username must be at least 3 characters");
        return;
      }
      this.setSuccess(formController);
    });
  }

  validateEmail() {
    this.validate("#email", (formController) => {
      if (!emailRegExp.test(this.model._email)) {
        this.setError(formController, "Email is not valid");
        return;
      }
      formController.setAttribute("class", "form-validate success");
    });
  }

  validatePassword() {
    this.validate("#password", (formController) => {
      if (this.model._password.length < 6) {
        this.setError(formController, "Password must be at least 6 characters");
        return;
      }
      this.setSuccess(formController);
    });
  }

  validatePassword2() {
    this.validate("#password2", (formController) => {
      if (this.model._password2.length === 0) {
        this.setError(formController, "Password2 is required");
        return;
      }

      if (this.model._password !== this.model._password2) {
        this.setError(formController, "Passwords do not match");
        return;
      }
      this.setSuccess(formController);
    });
  }

  submitInfo(e) {
    e.preventDefault();
    this.validateUsername();
    this.validateEmail();
    this.validatePassword();
    this.validatePassword2();
  }

  setSuccess(target) {
    target.setAttribute("class", "form-validate success");
  }

  setError(target, message) {
    const $error = target.querySelector("small");
    target.setAttribute("class", "form-validate failure");
    $error.innerText = message;
  }
}

export default Controller;

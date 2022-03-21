class Model {
  constructor() {
    this._username = "";
    this._email = "";
    this._password = "";
    this._password2 = "";
  }

  get username() {
    return this._username;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get password2() {
    return this._password2;
  }

  set username(value) {
    this._username = value;
  }

  set email(value) {
    this._email = value;
  }

  set password(value) {
    this._password = value;
  }

  set password2(value) {
    this._password2 = value;
  }
}

export default Model;

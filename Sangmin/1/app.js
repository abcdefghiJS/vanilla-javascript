const submitButton = document.querySelector(".submit-button-form");
const userInformation = document.querySelector(".user-information");

const nameInput = userInformation.querySelector("#name");
const emailInput = userInformation.querySelector("#email");
const passwordInput = userInformation.querySelector("#password");
const passwordAgainInput = userInformation.querySelector("#password-again");

const nameInputForm = userInformation.querySelector("#name");
const emailInputForm = userInformation.querySelector("#email");
const passwordInputForm = userInformation.querySelector("#password");
const passwordAgainInputForm = userInformation.querySelector("#password-again");

const confirmUserNameFunction = () => {
  const nameInputValue = nameInput.value;
  const nameAlert = userInformation.querySelector(".name-alert");

  if (nameInputValue.length >= 3) {
    emptyAlertText(nameAlert);
    changeInputCondition(true, nameInputForm);
    return;
  }
  changeAlertText(nameAlert, "Username must be at least 3 characters");
  changeInputCondition(false, nameInputForm);
  return;
};
const confirmEmail = () => {
  const emailInputValue = emailInput.value;
  const emailAlert = userInformation.querySelector(".email-alert");

  const atIndex = emailInputValue.indexOf("@");
  const dotIndex = emailInputValue.indexOf(".");
  const frontOfAtIndex = emailInputValue.substring(0, atIndex);
  const AtIndexTodotIndex = emailInputValue.substring(atIndex + 1, dotIndex);

  if (
    frontOfAtIndex.length > 0 &&
    AtIndexTodotIndex.length > 0 &&
    emailInputValue.includes("@") &&
    emailInputValue.endsWith(".com")
  ) {
    emptyAlertText(emailAlert);
    changeInputCondition(true, emailInputForm);
    return;
  }
  changeAlertText(emailAlert, "Email is not valid");
  changeInputCondition(false, emailInputForm);
  return;
};
const confirmPassword = () => {
  const passwordInputValue = passwordInput.value;
  const passwordAlert = userInformation.querySelector(".password-alert");

  if (passwordInputValue.length >= 6) {
    emptyAlertText(passwordAlert);
    changeInputCondition(true, passwordInputForm);
    return;
  }
  changeAlertText(passwordAlert, "Password must be at least 6 characters");
  changeInputCondition(false, passwordInputForm);
  return;
};
const confirmPasswordAgain = () => {
  const passwordInputValue = passwordInput.value;
  const passwordAgainInputValue = passwordAgainInput.value;
  const passwordAgainAlert = userInformation.querySelector(
    ".password-again-alert"
  );

  if (
    passwordInputValue === passwordAgainInputValue &&
    passwordAgainInputValue !== ""
  ) {
    emptyAlertText(passwordAgainAlert);
    changeInputCondition(true, passwordAgainInputForm);
    return;
  }
  if (passwordAgainInputValue === "") {
    changeAlertText(passwordAgainAlert, "Confirm Password is required");
    changeInputCondition(false, passwordAgainInputForm);
    return;
  }
  changeAlertText(passwordAgainAlert, "Password not matched");
  changeInputCondition(false, passwordAgainInputForm);
  return;
};

const changeInputCondition = (bool, inputForm) => {
  if (bool === true) {
    inputForm.classList.remove("dissatisfact-condition");
    inputForm.classList.add("satisfact-condition");
  }
  if (bool === false) {
    inputForm.classList.remove("satisfact-condition");
    inputForm.classList.add("dissatisfact-condition");
  }
};
const emptyAlertText = (textForm) => {
  textForm.innerHTML = "&nbsp";
};
const changeAlertText = (textForm, text) => {
  textForm.innerHTML = text;
};

const submitUserInformation = () => {
  confirmUserNameFunction();
  confirmEmail();
  confirmPassword();
  confirmPasswordAgain();
};
submitButton.addEventListener("click", submitUserInformation);

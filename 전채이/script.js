const submitButton = document.querySelector("button");
const forms = document.querySelectorAll(".form-control");

// const usernameInput = document.querySelector('#username');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const password2 = document.querySelector('#password2');

submitButton.addEventListener("click", () => {
  event.preventDefault();
  forms.forEach((form) => {
    let temp = false;
    let formInput = form.querySelector("input");

    switch (formInput.id) {
      case "username":
        temp = checkLength(formInput);
        break;
      case "email":
        temp = checkEmail(formInput.value);
        break;
      case "password":
        temp = checkLength(formInput);
        break;
      case "password2":
        const password = document.querySelector("#password").value;
        temp =
          checkPasswordsMatch(password, formInput.value) &&
          checkRequired(formInput.value);
        break;
    }

    let password2Small = form.querySelector("small");
    if (temp) {
      form.className = "form-control success";
    } else {
      if (formInput.id === "password2" && !checkRequired(formInput.value)) {
        password2Small.innerHTML = "Password2 is required";
      } else if (formInput.id === "password2") {
        password2Small.innerHTML = "Passwords do not match";
      }
      form.className = "form-control error";
    }
  });
});

// 입력 배열 받아들이기
function checkRequired(value) {
  return value ? true : false;
}
// 최소 및 최대 길이 확인
function checkLength(input) {
  return input.id === "username"
    ? input.value.length > 2 && input.value.length < 15
    : input.value.length > 5;
}
// 정규식으로 이메일 유효성 검사
function checkEmail(value) {
  return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
    value
  );
}
// 비밀번호 확인과 일치하는지 확인
function checkPasswordsMatch(value1, value2) {
  return value1 === value2;
}

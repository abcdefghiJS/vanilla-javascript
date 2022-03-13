const $submitButton = document.querySelector("button");
const $forms = document.querySelectorAll(".form-control");

$submitButton.addEventListener("click", submitUserInformation);

function submitUserInformation() {
  event.preventDefault();
  $forms.forEach((form) => {
    const formInput = form.querySelector("input");

    switch (formInput.id) {
      case "username":
        if (checkLength(formInput, 2, 15)) {
          success(form);
          return;
        }
        error(form);
        break;
      case "email":
        if (checkEmail(formInput.value)) {
          success(form);
          return;
        }
        error(form);
        break;
      case "password":
        if (checkLength(formInput, 5)) {
          success(form);
          return;
        }
        error(form);
        break;
      case "password2":
        const password = document.querySelector("#password").value;

        if (!checkRequired(formInput.value)) {
          error(form, "Password2 is required");
          return;
        }

        if (!checkPasswordsMatch(password, formInput.value)) {
          error(form, "Passwords do not match");
          return;
        }

        success(form);

        break;
    }
  });
}

// 입력 배열 받아들이기
function checkRequired(value) {
  return value ? true : false;
}
// 길이 확인
function checkLength(input, min = 0, max = 9999) {
  return input.value.length > min && input.value.length < max;
}
// 정규식으로 이메일 유효성 검사
function checkEmail(value) {
  const emailRegExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return emailRegExp.test(value);
}
// 비밀번호 확인과 일치하는지 확인
function checkPasswordsMatch(value1, value2) {
  return value1 === value2;
}

function success(target) {
  target.className = "form-control success";
}
function error(target, message) {
  const small = target.querySelector("small");
  if (message) {
    small.innerHTML = message;
  }
  target.className = "form-control error";
}

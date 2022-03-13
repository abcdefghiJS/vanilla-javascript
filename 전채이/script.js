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
          form.className = "form-control success";
          return;
        }
        form.className = "form-control error";
        break;
      case "email":
        if (checkEmail(formInput.value)) {
          form.className = "form-control success";
          return;
        }
        form.className = "form-control error";
        break;
      case "password":
        if (checkLength(formInput, 5)) {
          form.className = "form-control success";
          return;
        }
        form.className = "form-control error";
        break;
      case "password2":
        const password = document.querySelector("#password").value;
        const password2Small = form.querySelector("small");

        if (!checkRequired(formInput.value)) {
          password2Small.innerHTML = "Password2 is required";
          form.className = "form-control error";
          return;
        }

        if (!checkPasswordsMatch(password, formInput.value)) {
          password2Small.innerHTML = "Passwords do not match";
          form.className = "form-control error";
          return;
        }

        form.className = "form-control success";

        break;
    }
  });
}

// 입력 배열 받아들이기
function checkRequired(value) {
  return value ? true : false;
}
function checkLength(input, min = 0, max = 9999) {
  console.log("min, max = ", min, max);
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

const $submitButton = document.querySelector('.form-submit-button');
const $usernameInput = document.querySelector('.form-input.username');
const $emailInput = document.querySelector('.form-input.email');
const $passwordInput = document.querySelector('.form-input.password');
const $confirmPasswordInput = document.querySelector(
  '.form-input.confirmPassword'
);

// error 상태일때
const changeErrorStatus = ($input, errorMessageString) => {
  const $errorSpan = $input.nextElementSibling;

  $input.classList.remove('form-input-success');
  $input.classList.add('form-input-error');
  $errorSpan.classList.remove('hidden');

  if (errorMessageString) {
    $errorSpan.textContent = errorMessageString;
  }
};

// success 상태일때
const changeSuccessStatus = ($input) => {
  const $errorSpan = $input.nextElementSibling;

  $input.classList.remove('form-input-error');
  $input.classList.add('form-input-success');
  $errorSpan.classList.add('hidden');
};

// username 길이 확인
const checkUsername = ($usernameInput) => {
  const usernameLength = $usernameInput.value.length;
  if (usernameLength < 3) {
    changeErrorStatus($usernameInput);
    return;
  }
  changeSuccessStatus($usernameInput);
};

// 유효한 email 인지 확인
const checkEmail = ($emailInput) => {
  //첫째자리에는 숫자 혹은 알파벳, 그 뒤로는 -, _, . 들어올 수 있고, 도메인 주소 전에 @ 들어와야 하고, .이 최소 하나 있어야 하며, 마지막 마디는 2~3 자리여야 한다.
  const emailRegExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  //string.match는 해당하는게 없으면 null을, 해당하는게 있으면 배열을 반환한다.
  if ($emailInput.value.match(emailRegExp) === null) {
    changeErrorStatus($emailInput);
    return;
  }
  changeSuccessStatus($emailInput);
};

// password 길이 확인
const checkPassword = ($passwordInput) => {
  const passwordLength = $passwordInput.value.length;
  if (passwordLength < 6) {
    changeErrorStatus($passwordInput);
    return;
  }
  changeSuccessStatus($passwordInput);
};

// password와 같아야 하고, 길이가 6 이상이여야 한다
const checkConfirmPassword = ($passwordInput, $confirmPasswordInput) => {
  const password = $passwordInput.value;
  const confirmPassword = $confirmPasswordInput.value;
  if (confirmPassword.length === 0) {
    changeErrorStatus($confirmPasswordInput, 'Confirm Password is Required');
    return;
  }

  if (confirmPassword.length < 6) {
    changeErrorStatus(
      $confirmPasswordInput,
      'Confirm Password must be at least 6 characters'
    );
    return;
  }

  if (password !== confirmPassword) {
    changeErrorStatus($confirmPasswordInput, 'Passwords do not match');
    return;
  }
  changeSuccessStatus($confirmPasswordInput);
};

const clickSubmitButton = (e) => {
  e.preventDefault();
  checkUsername($usernameInput);
  checkEmail($emailInput);
  checkPassword($passwordInput);
  checkConfirmPassword($passwordInput, $confirmPasswordInput);
};

$submitButton.addEventListener('click', clickSubmitButton);

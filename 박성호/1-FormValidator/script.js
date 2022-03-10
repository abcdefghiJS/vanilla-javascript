const $submitButton = document.querySelector('.form-submit-button');
const $usernameInput = document.querySelector('.form-input.username');
const $emailInput = document.querySelector('.form-input.email');
const $passwordInput = document.querySelector('.form-input.password');
const $confirmPasswordInput = document.querySelector(
  '.form-input.confirmPassword'
);

const checkUsername = () => {
  const inputValue = $usernameInput.value;
  const $errorMessage = $usernameInput.nextElementSibling;
  if (inputValue.length < 3) {
    $usernameInput.classList.remove('form-input-success');
    $usernameInput.classList.add('form-input-error');
    $errorMessage.classList.remove('hidden');
    return;
  }
  $usernameInput.classList.remove('form-input-error');
  $usernameInput.classList.add('form-input-success');
  $errorMessage.classList.add('hidden');
};

const checkEmail = () => {
  const inputValue = $emailInput.value;
  const $errorMessage = $emailInput.nextElementSibling;

  //첫째자리에는 숫자 혹은 알파벳, 그 뒤로는 -, _, . 들어올 수 있고, 도메인 주소 전에 @ 들어와야 하고, .이 최소 하나 있어야 하며, 마지막 마디는 2~3 자리여야 한다.
  const emailRegExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  //string.match는 해당하는게 없으면 null을, 해당하는게 있으면 배열을 반환한다.
  if (inputValue.match(emailRegExp) === null) {
    $emailInput.classList.remove('form-input-success');
    $emailInput.classList.add('form-input-error');
    $errorMessage.classList.remove('hidden');
    return;
  }
  $emailInput.classList.remove('form-input-error');
  $emailInput.classList.add('form-input-success');
  $errorMessage.classList.add('hidden');
};

const checkPassword = () => {
  const inputValue = $passwordInput.value;
  const $errorMessage = $passwordInput.nextElementSibling;
  if (inputValue.length < 6) {
    $passwordInput.classList.remove('form-input-success');
    $passwordInput.classList.add('form-input-error');
    $errorMessage.classList.remove('hidden');
    return;
  }
  $passwordInput.classList.remove('form-input-error');
  $passwordInput.classList.add('form-input-success');
  $errorMessage.classList.add('hidden');
};

// 위에 입력한 비밀번호와 같아야 한다.
const checkConfirmPassword = () => {
  const passwordInputValue = $passwordInput.value;
  const confirmPasswordInputValue = $confirmPasswordInput.value;
  const $errorMessage = $confirmPasswordInput.nextElementSibling;

  if (confirmPasswordInputValue.length === 0) {
    $confirmPasswordInput.classList.remove('form-input-success');
    $confirmPasswordInput.classList.add('form-input-error');
    $errorMessage.classList.remove('hidden');
    $errorMessage.innerHTML = 'Confirm Password is required';
    return;
  }

  if (confirmPasswordInputValue.length < 6) {
    $confirmPasswordInput.classList.remove('form-input-success');
    $confirmPasswordInput.classList.add('form-input-error');
    $errorMessage.classList.remove('hidden');
    $errorMessage.innerHTML = 'Confirm Password must be at least 6 characters';
    return;
  }

  if (passwordInputValue !== confirmPasswordInputValue) {
    $confirmPasswordInput.classList.remove('form-input-success');
    $confirmPasswordInput.classList.add('form-input-error');
    $errorMessage.classList.remove('hidden');
    $errorMessage.innerHTML = 'Passwords do not match';
    return;
  }

  $confirmPasswordInput.classList.remove('form-input-error');
  $confirmPasswordInput.classList.add('form-input-success');
  $errorMessage.classList.add('hidden');
};

const clickSubmitButton = (e) => {
  e.preventDefault();

  checkUsername();
  checkEmail();
  checkPassword();
  checkConfirmPassword();
};

$submitButton.addEventListener('click', clickSubmitButton);

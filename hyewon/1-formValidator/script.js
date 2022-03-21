const $form = document.getElementById('form')
const $username = document.getElementById('username')
const $email = document.getElementById('email')
const $password = document.getElementById('password')
const $password2 = document.getElementById('password2')

// 오류 
function Error(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// 통과
function Pass(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// 필요한 입력이 다 들어왔는지 확인하는 함수
function checkRequired(arr) {
    arr.forEach(function(item) {
        if(item.value === ""){
            Error(item, `${item.id} is required.`) 
        } else { // 입력이 들어온 이후에 조건 판단
            switch (item) {
                case $username:
                    checkLength($username, 3, 15)
                    break
                case $email:
                    checkEmail($email)
                    break
                case $password:
                    checkLength($password, 6, 25)
                    break
                case $password2:
                    checkPasswordsMatch($password, $password2)
                    break
            }
        }
    })
}

// 입력 길이를 확인하는 함수
function checkLength(input, min, max) {
    const length = input.value.length
    if((length < min) || (length > max)) {
        Error(input, `${input.id} is must be ${min} to ${max} characters long.`)
    } else {
        Pass(input)
    }
}

// 이메일 유효성 검사하는 함수
function checkEmail(input) {
    const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    if (emailRegex.test(input.value)) {
        Pass(input)
    } else {
        Error(input, `${input.id} is invalid.`)
    }
}

// 비밀번호 확인 일치 검사 함수
function checkPasswordsMatch(pass, pass2) {
    if((pass.value !== pass2.value)) {
        Error(pass2, "Passwords do not match.")
    } else {
        Pass(pass2)
    }
}

$form.addEventListener('submit', function(e) {
    e.preventDefault()

    checkRequired([$username, $email, $password, $password2])
})
const ID = 'to1583';
const PASSWORD = 'xodnr';
const EMAIL = 'email@email.com';
const AUTH_NUMBER = '1010';

let id = '', password = '', passwordCheck = '', email = '', authNumber = '';
let isDuplicate = true, isPasswordPattern = false, isEqualPassword = false, isEmail = false, isDuplicateEmail = true, isEqualAuthNumber = false;

const idInputElement = document.getElementById('id');
const passwordInputElement = document.getElementById('password');
const passwordCheckInputElement = document.getElementById('password-check');
const emailInputElement = document.getElementById('email');
const authNumberInputElement = document.getElementById('auth-number');

const checkDuplicateButtonElement = document.getElementById('check-duplication-button');
const checkEmailButtonElement = document.getElementById('check-email-button');
const checkAuthNumberButtonElement = document.getElementById('check-auth-number-button');

const idMessageElement = document.getElementById('id-message');
const passwordMessageElement = document.getElementById('password-message');
const passwordCheckMessageElement = document.getElementById('password-check-message');
const emailMessageElement = document.getElementById('email-message');
const authNumberMessageElement = document.getElementById('auth-number-message');

const signUpButtonElement = document.getElementById('sign-up-button');
const signinLinkElement = document.getElementById('sign-in-link');

function onIdInputHandler (event) {
    // id에 event에서 발생한 실제 요소 값을 할당한다.
    // 사용자가 id에 입력한 값을 가져온다
    id = event.target.value;
    // id의 중복값을 true로 초기화한다.
    isDuplicate = true;

    // 사용자가 id에 입력한 값이 있을 때, checkDuplicateButtonElement의 클래스명을 'input-primary-button'로 바꾼다
    if (id) checkDuplicateButtonElement.className = 'input-primary-button';
    else {
        // 사용자가 id에 입력한 값이 없을 때, checkDuplicateButtonElement의 클래스명을 'input-disable-button'로 바꾼다
        checkDuplicateButtonElement.className = 'input-disable-button';
        // 텍스트컨텐츠를 초기화한다
        idMessageElement.textContent = '';  
    }
}

function onPasswordInputHandler (event) {
    password = event.target.value;
    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,13}$/;
    isPasswordPattern = passwordReg.test(password);
    if (!isPasswordPattern) {
        passwordMessageElement.className = 'input-message error';
        passwordMessageElement.textContent = '영문, 숫자를 혼용하여 8 ~ 13자를 입력해주세요.';
        return;
    }
    passwordMessageElement.className = 'input-message';
    passwordMessageElement.textContent = '';
}

function onPasswordCheckInputHandler (event){
    passwordCheck = event.target.value

    isEqualPassword = password === passwordCheck;
    if (!isEqualPassword){
        passwordCheckMessageElement.className = 'input-message error';
        passwordCheckMessageElement.textContent = '비밀번호가 일치하지 않습니다';
        return;
    }
    passwordCheckMessageElement.className = 'input-message';
    passwordCheckMessageElement.textContent = '';
}

function onEmailInputHandler (event) {
    email = event.target.value;
    isEmail = false;
    isDuplicateEmail = true;

    if(email) checkEmailButtonElement.className = 'input-primary-button';
    else {
        checkEmailButtonElement.className = 'input-disable-button';
        emailMessageElement.textContent = '';
    }
}

function onAuthnumberInputHandler (event) {
    authNumber = event.target.value;
    isEqualAuthNumber = false;

    if(authNumber) checkAuthNumberButtonElement.className = 'input-primary-button';
    else checkAuthNumberButtonElement.className = 'input-disable-button';
}

// 사용자가 값을 입력할 때마다 실행하는 함수
// function (event) {
//    onIdInputHandler(event);
//    setSignUpButton();
// 를 실행한다. 
idInputElement.addEventListener('input', function (event) {
    onIdInputHandler(event); // onIdInputHandler => 사용자가 입력한 값이 있는지 없는지 체크하고 버튼을 활성화 하는 함수
    setSignUpButton(); // 해당 함수에 가서 보면 각 요소의 입력값들이 조건을 만족하면 회원가입 버튼을 활성화 한다
});

passwordInputElement.addEventListener('input', function (event) {
    onPasswordInputHandler(event);
    setSignUpButton();
})

passwordCheckInputElement.addEventListener('input', function (event) {
    onPasswordCheckInputHandler(event);
    setSignUpButton();
})

emailInputElement.addEventListener('input', function (event) {
    onEmailInputHandler(event);
    setSignUpButton();
});
authNumberInputElement.addEventListener('input', function (event) {
    onAuthnumberInputHandler(event);
    setSignUpButton();
});

// id중복확인 버튼을 클릭했을때 실행할 함수
function onCheckDuplicateClickHandler (event) {
    if(!id) return; // 만약 id에 값이 존재하지 않다면 종료

    // 사용자가 입력한 id와 기존에 존재하는 ID가 중복되는지 확인
    isDuplicate = id === ID;

    // 입력한 id가 중복된다면 idMessageElement의 className을 'input-message error'로 바꾸고, textContent를 '이미 사용중인 아이디 입니다.'로 바꾼다.
    if(isDuplicate){
        idMessageElement.className = 'input-message error';
        idMessageElement.textContent = '이미 사용중인 아이디 입니다.';
        return;
    }
    // 입력한 id가 중복되지 않는다면 idMessageElement의 className을 'input-message primary'로 바꾸고, textContent를 '사용 가능한 아이디 입니다.'로 바꾼다
    idMessageElement.className = 'input-message primary';
    idMessageElement.textContent = '사용 가능한 아이디 입니다.';
}

function onCheckEmailClickHandler (event) {
    if(!email) return;

    const emailReg = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/; //자바 스크립트에서의 정규식
    isEmail = emailReg.test(email);

    if(!isEmail){
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이메일 형식이 아닙니다.';
        return;
    }

    isDuplicateEmail = email === EMAIL;
    if(isDuplicateEmail){
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이미 사용중인 이메일 입니다.';
        return;
    }

    emailMessageElement.className = 'input-message primary';
    emailMessageElement.textContent = '인증번호가 전송되었습니다.'
}

function onCheckAuthNumberClickHandler (event) {
    if(!authNumber) return;

    isEqualAuthNumber = authNumber === AUTH_NUMBER;

    if(!isEqualAuthNumber) {
        authNumberMessageElement.className = 'input-message error';
        authNumberMessageElement.textContent = '인증번호가 일치하지 않습니다.';
        return;
    }
    authNumberMessageElement.className = 'input-message primary';
    authNumberMessageElement.textContent = '인증번호가 확인되었습니다.';
}

checkDuplicateButtonElement.addEventListener('click', function (event){
    onCheckDuplicateClickHandler(event);
    setSignUpButton();
});
checkEmailButtonElement.addEventListener('click', function (event){
    onCheckEmailClickHandler(event);
    setSignUpButton();
});
checkAuthNumberButtonElement.addEventListener('click', function (event){
    onCheckAuthNumberClickHandler(event);
    setSignUpButton();
});

function onSignUpLinkClickHandler(event) {
    window.location.href = '../sign-in/';
}

signinLinkElement.addEventListener('click', onSignUpLinkClickHandler);

function setSignUpButton () {
    const isPrimaryButton = 
    id && password && passwordCheck && email && authNumber && 
    !isDuplicate && isPasswordPattern && isEqualPassword && isEmail && !isDuplicateEmail && isEqualAuthNumber;

    if (isPrimaryButton) signUpButtonElement.className = 'primary-button full-width';
    else signUpButtonElement.className = 'disable-button full-width';
}
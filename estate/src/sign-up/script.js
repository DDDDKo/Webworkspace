function onIdInputHandler (event) {
    const checkDuplicateButtonElement = document.getElementById('check-duplication-button');
    const value = event.target.value;
    if (value) checkDuplicateButtonElement.className = 'input-primary-button';
    else checkDuplicateButtonElement.className = 'input-disable-button';
}

function onEmailInputHandler (event) {
    const checkEmailButtonElement = document.getElementById('check-email-button');
    const value = event.target.value;
    if(value) checkEmailButtonElement.className = 'input-primary-button';
    else checkEmailButtonElement.className = 'input-disable-button';
}

function onAuthnumberInputHandler (event) {
    const checkAuthNumberButtonElement = document.getElementById('check-auth-number-button');
    const value = event.target.value;
    if(value) checkAuthNumberButtonElement.className = 'input-primary-button';
    else checkAuthNumberButtonElement.className = 'input-disable-button';
}

const idInputElement = document.getElementById('id');
idInputElement.addEventListener('input', onIdInputHandler);

const emailInputElement = document.getElementById('email');
emailInputElement.addEventListener('input', onEmailInputHandler);

const authNumberInputElement = document.getElementById('auth-number');
authNumberInputElement.addEventListener('input', onAuthnumberInputHandler);
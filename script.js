

//functions
let verifyUserName = () => {
    let inputForUsername = document.getElementById('inputForUsername');
 
    let paragraphForUsername_empty = document.getElementById('paragraphForUsername_empty');
    let paragraphForUsername_capitalAlphabets = document.getElementById('paragraphForUsername_capitalAlphabets');
    let paragraphForUsername_freeSpaces = document.getElementById('paragraphForUsername_freeSpaces');


    let username = inputForUsername.value;
    if (username === "") {
        paragraphForUsername_empty.classList.add('dotRed');
        paragraphForUsername_empty.classList.remove('dotGreen');
        paragraphForUsername_capitalAlphabets.classList.add('dotRed');
        paragraphForUsername_capitalAlphabets.classList.remove('dotGreen');
        paragraphForUsername_freeSpaces.classList.add('dotRed');
        paragraphForUsername_freeSpaces.classList.remove('dotGreen');
    }
    else if (username.match(/[A-Z]/) && username.includes(" ")) {
        paragraphForUsername_empty.classList.add('dotRed');
        paragraphForUsername_empty.classList.remove('dotGreen');
        paragraphForUsername_capitalAlphabets.classList.add('dotRed');
        paragraphForUsername_capitalAlphabets.classList.remove('dotGreen');
        paragraphForUsername_empty.innerText = 'Username is not correct';
        paragraphForUsername_empty.classList.add('dotRed');
        paragraphForUsername_empty.classList.remove('dotGreen');
    }
    else if (username.match(/[A-Z]/)) {
        paragraphForUsername_empty.innerText = 'Username is not correct';
        paragraphForUsername_empty.classList.add('dotRed');
        paragraphForUsername_empty.classList.remove('dotGreen');
        paragraphForUsername_capitalAlphabets.classList.add('dotRed');
        paragraphForUsername_freeSpaces.classList.add('dotGreen');
        paragraphForUsername_freeSpaces.classList.remove('dotRed');
    }
    else if (username.match(/[-]/)) {
        paragraphForUsername_empty.style.display='none';
        paragraphForUsername_capitalAlphabets.innerHTML='Minus is not allowed';
        paragraphForUsername_capitalAlphabets.classList.add('dotRed');
        paragraphForUsername_freeSpaces.style.display='none';
    }
    else if (username.includes(" ")) {
        paragraphForUsername_empty.innerText = 'Username is not correct';
        paragraphForUsername_empty.classList.add('dotRed');
        paragraphForUsername_empty.classList.remove('dotGreen');
        paragraphForUsername_capitalAlphabets.classList.add('dotGreen');
        paragraphForUsername_capitalAlphabets.classList.remove('dotRed');
        paragraphForUsername_freeSpaces.classList.add('dotRed');
        paragraphForUsername_freeSpaces.classList.remove('dotGreen');
    }
    else {
        paragraphForUsername_freeSpaces.classList.add('dotGreen');
        paragraphForUsername_freeSpaces.classList.remove('dotRed');
        paragraphForUsername_capitalAlphabets.classList.add('dotGreen');
        paragraphForUsername_capitalAlphabets.classList.remove('dotRed');
        paragraphForUsername_empty.innerText = 'Username is correct';
        paragraphForUsername_empty.classList.add('dotGreen');
        paragraphForUsername_empty.classList.remove('dotRed');
}
}


let verifyEmail = () => {
    let inputForEmail = document.getElementById('inputForEmail');

    let paragraphForEmail_Empty = document.getElementById('paragraphForEmail_Empty');
let paragraphForEmail_validation = document.getElementById('paragraphForEmail_validation');


    const email = inputForEmail.value;
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/; 
    
    if (email === "") {
        paragraphForEmail_Empty.classList.add('dotRed');
        paragraphForEmail_Empty.classList.remove('dotGreen');
    } else {
        paragraphForEmail_Empty.style.display = 'none';
    }

    if (!emailCheck.test(email)) {
        paragraphForEmail_validation.classList.add('dotRed');
        paragraphForEmail_validation.classList.remove('dotGreen');
    } else {
        paragraphForEmail_validation.innerText = 'Email is valid'
        paragraphForEmail_validation.classList.add('dotGreen');
        paragraphForEmail_validation.classList.remove('dotRed');
    }
}


let verifyPassword = () => {
    let inputForPassword = document.getElementById('inputForPassword');


    let paragraphForPassword_empty = document.getElementById('paragraphForPassword_empty');
    let paragraphForPassword_freeSpaces = document.getElementById('paragraphForPassword_freeSpaces');
    let paragraphForPassword_length = document.getElementById('paragraphForPassword_length');
    let paragraphForPassword_capitalAlphabets = document.getElementById('paragraphForPassword_capitalAlphabets');
    let paragraphForPassword_lowerCaseAlphabets = document.getElementById('paragraphForPassword_lowerCaseAlphabets');
    let paragraphForPassword_digit = document.getElementById('paragraphForPassword_digit');
    let paragraphForPassword_symbol = document.getElementById('paragraphForPassword_symbol');    

    if (inputForPassword.value === "") {
        paragraphForPassword_empty.classList.add('dotRed');
        paragraphForPassword_empty.classList.remove('dotGreen');
    } else {
        paragraphForPassword_empty.style.display = 'none';
    }

    if (inputForPassword.value.includes(" ")) {
        paragraphForPassword_freeSpaces.classList.remove('dotGreen');
        paragraphForPassword_freeSpaces.classList.add('dotRed');
    } 
    else if(inputForPassword.value === ""){
        paragraphForPassword_freeSpaces.classList.remove('dotGreen');
        paragraphForPassword_freeSpaces.classList.add('dotRed');
    }
    else {
        paragraphForPassword_freeSpaces.classList.remove('dotRed');
        paragraphForPassword_freeSpaces.classList.add('dotGreen');
    }

    if (inputForPassword.value.length < 8 || inputForPassword.value.length > 16) {
        paragraphForPassword_length.classList.remove('dotGreen');
        paragraphForPassword_length.classList.add('dotRed');
    } else {
        paragraphForPassword_length.classList.remove('dotRed');
        paragraphForPassword_length.classList.add('dotGreen');
    }

    if (!/[A-Z]/.test(inputForPassword.value)) {
        paragraphForPassword_capitalAlphabets.classList.remove('dotGreen');
        paragraphForPassword_capitalAlphabets.classList.add('dotRed');
    } else {
        paragraphForPassword_capitalAlphabets.classList.remove('dotRed');
        paragraphForPassword_capitalAlphabets.classList.add('dotGreen');
    }

    if (!/[a-z]/.test(inputForPassword.value)) {
        paragraphForPassword_lowerCaseAlphabets.classList.remove('dotGreen');
        paragraphForPassword_lowerCaseAlphabets.classList.add('dotRed');
    } else {
        paragraphForPassword_lowerCaseAlphabets.classList.remove('dotRed');
        paragraphForPassword_lowerCaseAlphabets.classList.add('dotGreen');
    }

    if (!/\d/.test(inputForPassword.value)) {
        paragraphForPassword_digit.classList.remove('dotGreen');
        paragraphForPassword_digit.classList.add('dotRed');
    } else {
        paragraphForPassword_digit.classList.remove('dotRed');
        paragraphForPassword_digit.classList.add('dotGreen');
    }

    if (!/[*&^%$#@!]/.test(inputForPassword.value)) {
        paragraphForPassword_symbol.classList.remove('dotGreen');
        paragraphForPassword_symbol.classList.add('dotRed');
    } else {
        paragraphForPassword_symbol.classList.remove('dotRed');
        paragraphForPassword_symbol.classList.add('dotGreen');
    }
}

let confirmPassword = () => {
    
let inputForConfirmPassword = document.getElementById('inputForConfirmPassword');
let ConfirmPassword = document.getElementById('ConfirmPassword');
    if (inputForConfirmPassword.value === "") {
        ConfirmPassword.innerText = "Confirm your password";
        ConfirmPassword.classList.add('dotRed');
        ConfirmPassword.classList.remove('dotGreen');
    } else if (inputForConfirmPassword.value !== inputForPassword.value) {
        ConfirmPassword.innerText = 'Passwords do not match';
        ConfirmPassword.classList.add('dotRed');
        ConfirmPassword.classList.remove('dotGreen');
    } else {
        ConfirmPassword.innerText = 'Password match';
        ConfirmPassword.classList.add('dotGreen');
        ConfirmPassword.classList.remove('dotRed');
    }
}

// Form submitting
let submit = document.getElementById("submit");
submit.addEventListener('click', (e) => {
    e.preventDefault();
    verifyUserName();
    verifyEmail();
    verifyPassword();
    confirmPassword();
});


// Keypress for inputs
let inputForUsername = document.getElementById('inputForUsername').addEventListener('input', () => {
        verifyUserName();
    });
    let inputForEmail = document.getElementById('inputForEmail').addEventListener('input', () => {
        verifyEmail();
    });
    let inputForPassword = document.getElementById('inputForPassword').addEventListener('input', () => {
        verifyPassword();
    });
    let inputForConfirmPassword = document.getElementById('inputForConfirmPassword').addEventListener('input', () => {
        confirmPassword();
    });

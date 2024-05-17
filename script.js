const password = document.getElementById("input"); 
const submit = document.getElementById("button");

const uppercaseError = document.getElementById("uppercase");
const charError = document.getElementById("char");
const numberError = document.getElementById("number");

password.addEventListener("input", function(event) {
    const passwordValue = event.target.value;
    
    const hasUppercase = hasUppercaseLetter(passwordValue);
    uppercaseError.textContent = hasUppercase ? "✓ Password contains at least one uppercase letter" : "✗ Password must contain at least one uppercase letter";
    uppercaseError.style.color = hasUppercase ? "white" : "red";
    
    const hasSpecialChar = hasSpecialCharacter(passwordValue);
    charError.textContent = hasSpecialChar ? "✓ Password contains at least one special character" : "✗ Password must contain at least one special character ";
    charError.style.color = hasSpecialChar ? "white" : "red";
    
    const hasNumber = hasNumberCharacter(passwordValue);
    numberError.textContent = hasNumber ? "✓ Password contains at least one number" : "✗ Password must contain at least one number";
    numberError.style.color = hasNumber ? "white" : "red";
});

submit.addEventListener("click", function(event) {
    const passwordValue = password.value;
    const hasUppercase = hasUppercaseLetter(passwordValue);
    const hasSpecialChar = hasSpecialCharacter(passwordValue);
    const hasNumber = hasNumberCharacter(passwordValue);
    
    if (!hasUppercase || !hasSpecialChar || !hasNumber) {
        event.preventDefault();
        alert("Password does not meet the criteria!");
    }
});

function hasUppercaseLetter(password) {
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            return true;
        }
    }
    return false;
}


function hasSpecialCharacter(password) {
    const specialChars = "!@#$%^&*";
    for (let i = 0; i < password.length; i++) {
        if (specialChars.includes(password[i])) {
            return true;
        }
    }
    return false;
}

function hasNumberCharacter(password) {
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(parseInt(password[i]))) {
            return true;
        }
    }
    return false;
}

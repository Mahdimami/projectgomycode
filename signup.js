function validateEmail(email) {
    var regex = /^[a-zA-Z0-9]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/;
    return regex.test(email);
}

function validateName(name) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(name);
}

function validateAge(age) {
    var regex = /^[0-9]{1,3}$/;
    return regex.test(age);
}

function validatePassword(password) {
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regex.test(password);
}

function validateForm() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var age = document.getElementById("age").value;
    var password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        document.getElementById("emailErr").innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (!validateName(name)) {
        document.getElementById("nameErr").innerHTML = "Please enter a valid name.";
        return false;
    }

    if (!validateName(surname)) {
        document.getElementById("surnameErr").innerHTML = "Please enter a valid surname.";
        return false;
    }

    if (!validateAge(age)) {
        document.getElementById("ageErr").innerHTML = "Please enter a valid age.";
        return false;
    }

    if (!validatePassword(password)) {
        document.getElementById("passwordErr").innerHTML = "Please enter a valid password.";
        return false;
    }

    // Check if all inputs are valid
    if (validateEmail(email) && validateName(name) && validateName(surname) && validateAge(age) && validatePassword(password)) {
        document.getElementById("success-message").style.display = "block";
    }
    
    return false;
}

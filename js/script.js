// Validate form
function validate(event) {
    // Prevents form submission
    event.preventDefault(); 

    // Reset the error messages
    resetErrorMessages();

// Get form elements
const emailInput = document.getElementById('email');
const loginInput = document.getElementById('login');
const passInput = document.getElementById('pass');
const pass2Input = document.getElementById('pass2');
const termsCheckbox = document.getElementById('terms');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        showError('email', 'Email address should be xyz@xyz.xyz format.');
    }


    // Validate login
    if (loginInput.value.length === 0 || loginInput.value.length > 20) {
        showError('login', 'User name should be 20 characters long.');
    }

    // Validate password
    if (passInput.value.length < 6 || !/[A-Z]/.test(passInput.value) || !/[a-z]/.test(passInput.value)) {
        showError('pass', 'Password should have at least 1 uppercase letter and 1 lowercase letter.');
    }

    if ((pass2Input.value.length < 6 ) || (passInput.value !== pass2Input.value)) {
        showError('pass2', 'Passwords do not match and retype password.');
    }

    // Validate terms and conditions
    if (!termsCheckbox.checked) {
        showError('terms', 'Please accept the terms and conditions.');
    }

    // If there are no errors, submit the form
    if (!hasErrors()) {
        alert('Form submitted successfully!');
            document.getElementById('myForm').reset();
    }
}

function resetErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.innerHTML = '';
    });

    const inputFields = document.querySelectorAll('.error');
    inputFields.forEach(field => {
        field.classList.remove('error');
    });
}

function showError(field, message) {
    const errorField = document.getElementById(`${field}-error`);
    errorField.innerHTML = `&#10006; ${message}`; // Add the X symbol before the error message
    
    const inputField = document.getElementById(field);
    inputField.classList.add('error');
}

function hasErrors() {
    const errorFields = document.querySelectorAll('.error');
    return errorFields.length > 0;
}

function showNewsletter() {
    const newsletterCheckbox = document.getElementById('newsletter');
    if (newsletterCheckbox.checked) {
        alert('Warning: You may recieve spam emails by selecting to recieve the newsletter.');
    }
}

function resetForm() {
    resetErrorMessages();
    document.getElementById('myForm').reset();
}


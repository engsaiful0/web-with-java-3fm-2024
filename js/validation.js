// script.js
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    let isValid = true;
//var, let, const

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.style.display = 'none';
    });

    // Validate username
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        showError('usernameError', 'Username is required');
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    if (email === '') {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Invalid email format');
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value.trim();
    if (password === '') {
        showError('passwordError', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        isValid = false;
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (confirmPassword === '') {
        showError('confirmPasswordError', 'Confirm Password is required');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    // If the form is valid, you can submit the form or send an AJAX request
    if (isValid) {
        alert('Form submitted successfully!');
        // You can handle form submission here (e.g., send to server)
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

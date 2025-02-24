document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;
    
    // Name Validation
    const name = document.getElementById('name').value;
    if (name === '' || !/^[a-zA-Z ]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Please enter a valid name.';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }
    
    // Email Validation
    const email = document.getElementById('email').value;
    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }
    
    // Password Validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const strengthBar = document.getElementById('strength-bar');
    
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and contain a number and an uppercase letter.';
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }
    
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }
    
    if (valid) {
        alert('Form submitted successfully! Redirecting...');
        setTimeout(() => { window.location.href = 'thankyou.html'; }, 1500);
    }
});

document.getElementById('password').addEventListener('input', function() {
    const strengthBar = document.getElementById('strength-bar');
    const password = this.value;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    
    const colors = ["red", "orange", "green"];
    strengthBar.style.width = (strength * 33) + "%";
    strengthBar.style.backgroundColor = colors[strength - 1] || "red";
});

document.querySelector('.toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
    this.textContent = document.body.classList.contains('bg-dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

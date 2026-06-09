document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorBox = document.getElementById('formErrorBox');

    loginForm.addEventListener('submit', (event) => {
        // Halt traditional submission mechanics
        event.preventDefault();

        // Wipe past states cleanly
        errorBox.style.display = 'none';
        errorBox.innerHTML = '';

        const emailInput = loginForm.querySelector('.email-id');
        const passwordInput = loginForm.querySelector('.password-input');
        const roleSelect = loginForm.querySelector('.role-select');

        let errors = [];

        // 1. Validate Email Domain Node
        const emailValue = emailInput.value.trim().toLowerCase();
        if (!emailValue.endsWith('.com') && !emailValue.endsWith('.in')) {
            errors.push("Authorized access requires a valid '.com' or '.in' email node.");
        }

        // 2. Validate Password Character Threshold
        if (passwordInput.value.length < 6) {
            errors.push("Secure access profiles require a 6+ character verification key.");
        }

        // 3. Process Validation Diagnostics
        if (errors.length > 0) {
            // Render the top message using the exact signup format style
            errorBox.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${errors[0]}`;
            errorBox.style.display = 'block';
        } else {
            // SUCCESS: Pull value matrix parameter to process dynamic redirection
            const selectedRole = roleSelect.value;

            if (selectedRole === 'admin') {
                window.location.href = "./admin.html";
            } else if (selectedRole === 'user') {
                window.location.href = "./user.html";
            }
        }
    });

    /* --- Password Visibility Toggle --- */
    const visibilityBtn = loginForm.querySelector('.auth-toggle-visibility');
    if (visibilityBtn) {
        visibilityBtn.addEventListener('click', function () {
            const passwordField = loginForm.querySelector('.password-input');
            const visibilityIcon = this.querySelector('i');

            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                visibilityIcon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                passwordField.type = 'password';
                visibilityIcon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    }
});
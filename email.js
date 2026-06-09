   const form = document.getElementById("contactForm");
const emailInput = document.querySelector(".email-id");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", function(e) {
    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.(com|in)$/i;

    if (!regex.test(email)) {
        e.preventDefault(); // stop form submit
        errorMessage.textContent = "Email must end with .com or .in";
    } else {
        errorMessage.textContent = "";
    }
});
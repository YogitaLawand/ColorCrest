document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message === "") {
        alert("Please write a message.");
        return;
    }

    // Success message
    alert(`Thank you, ${name}! Your inquiry has been sent.`);
    document.getElementById("contactForm").reset();
});

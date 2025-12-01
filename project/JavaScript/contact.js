document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const error = document.getElementById("errorMsg");
    error.style.display = "none";
    let hasError = false;

    try {
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const inquiry = document.getElementById("inquiry").value;
        const message = document.getElementById("message").value.trim();

        if (!firstName) {
            throw new Error("First Name is required.");
        }
        if (!lastName) {
            throw new Error("Last Name is required.");
        }
        if (!email || !email.includes("@")) {
            throw new Error("Please enter a valid email address.");
        }
        if (!inquiry) {
            throw new Error("Please select a reason for inquiry.");
        }
        if (!message) {
            throw new Error("Message cannot be empty.");
        }

        alert("Form submitted successfully!");
        this.reset();

    } catch (err) {
        hasError = true;
        error.style.display = "block";
        error.textContent = err.message;
    }

    return !hasError;
});
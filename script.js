document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Fetch form field values
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Validate form fields
    if (!name || !email || !message) {
        alert("All fields are required.");
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    // Submit success
    alert("Thank you for your message!");
});
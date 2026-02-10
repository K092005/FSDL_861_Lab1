const form = document.getElementById("registrationForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const roll = document.getElementById("roll");
    const course = document.getElementById("course");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    let isValid = true;

    // Name
    if (name.value.trim().length < 3) {
        setError(name, "Enter valid name");
        isValid = false;
    } else setSuccess(name);

    // Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        setError(email, "Invalid email");
        isValid = false;
    } else setSuccess(email);

    // Roll number
    if (roll.value.trim() === "") {
        setError(roll, "Roll number required");
        isValid = false;
    } else setSuccess(roll);

    // Course
    if (course.value === "") {
        setError(course, "Select a course");
        isValid = false;
    } else setSuccess(course);

    // Password
    if (password.value.length < 6) {
        setError(password, "Min 6 characters");
        isValid = false;
    } else setSuccess(password);

    // Confirm password
    if (password.value !== confirmPassword.value) {
        setError(confirmPassword, "Passwords do not match");
        isValid = false;
    } else setSuccess(confirmPassword);

    if (!isValid) {
        statusMessage.textContent = "Registration Failed ❌";
        statusMessage.style.color = "red";
        return;
    }

    // Already registered check using email
    let students = JSON.parse(localStorage.getItem("students")) || [];

    if (students.includes(email.value)) {
        statusMessage.textContent = "Already Registered ⚠️";
        statusMessage.style.color = "orange";
        return;
    }

    students.push(email.value);
    localStorage.setItem("students", JSON.stringify(students));

    statusMessage.textContent = "Registration Successful ✅";
    statusMessage.style.color = "green";
    form.reset();
});

function setError(input, message) {
    input.nextElementSibling.textContent = message;
    input.classList.add("error-border");
    input.classList.remove("success-border");
}

function setSuccess(input) {
    input.classList.remove("error-border");
    input.classList.add("success-border");
}

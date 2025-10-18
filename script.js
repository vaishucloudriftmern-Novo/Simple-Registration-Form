var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")
var submitBtn = document.getElementById("submitBtn")

var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var passwordError = document.getElementById("passwordError")

function validateForm() {
    var nameValid = false
    var emailValid = false
    var passwordValid = false

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name cannot be empty."
        nameValid = false
    } else {
        nameError.textContent = ""
        nameValid = true
    }

    if (emailInput.value.indexOf("@") === -1 || emailInput.value.indexOf(".") === -1) {
        emailError.textContent = "Please enter a valid email address."
        emailValid = false
    } else {
        emailError.textContent = ""
        emailValid = true
    }

    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters."
        passwordValid = false
    } else {
        passwordError.textContent = ""
        passwordValid = true
    }

    submitBtn.disabled = !(nameValid && emailValid && passwordValid)
}

nameInput.addEventListener("input", validateForm)
emailInput.addEventListener("input", validateForm)
passwordInput.addEventListener("input", validateForm)

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault()
    alert("Form submitted successfully!")
})

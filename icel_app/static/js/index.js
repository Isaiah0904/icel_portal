function togglePassword() {
  let showPassword = document.getElementById("eyeicon");
  let password = document.getElementById("password");
  
  if (password.type === "password") {
    password.type = "text";
    showPassword.classList.remove('fa-eye');
    showPassword.classList.add('fa-eye-slash');
  } else {
    password.type = "password";
    showPassword.classList.remove('fa-eye-slash');
    showPassword.classList.add('fa-eye');
  }
}

function emailValidation() {
  let email = document.getElementById("id_username");  // Use Django's default form field name
  let emailValue = email.value;
  let errorMessage = document.querySelector(".email-error-message");

  // Check for empty email
  if (emailValue === "") {
    errorMessage.textContent = "Enter your email";
    email.classList.add("error");
    return false;
  }
  
  // Check for valid email format (must contain '@')
  if (!emailValue.includes("@") || emailValue.indexOf("@") === 0 || emailValue.indexOf("@") === emailValue.length - 1) {
    errorMessage.textContent = "Email must be a valid format, including '@'";
    email.classList.add("error");
    return false;
  }
  
  // Check for minimum length
  if (emailValue.length < 5) {
    errorMessage.textContent = "Email must be at least 5 characters long";
    email.classList.add("error");
    return false;
  } else {
    errorMessage.textContent = "";
    email.classList.remove("error");
    return true;
  }
}

function passwordValidation() {
  let password = document.getElementById("id_password");  // Use Django's default form field name
  let passwordValue = password.value;
  let errorMessage = document.querySelector(".password-error-message");
  
  // Check for empty password
  if (passwordValue.length < 8) {
    errorMessage.textContent = "Password must be at least 8 characters";
    password.classList.add("error");
    return false;
  } else if (passwordValue === "") {
    errorMessage.textContent = "Enter your Password";
    password.classList.add("error");
    return false;
  } else {
    errorMessage.textContent = "";
    password.classList.remove("error");
    return true;
  }
}

function validateForm(event) {
  const isEmailValid = emailValidation();
  const isPasswordValid = passwordValidation();
  
  if (!isEmailValid || !isPasswordValid) {
    event.preventDefault();  // Only prevent form submission if validation fails
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Attach event listeners
  // document.querySelector(".log-in-btn").addEventListener('click', validateForm);
});

function togglePassword() {
  let showPassword = document.getElementById("eyeicon")
  let password = document.getElementById("password")
    
  if (password.type === "password") {
    password.type = "text"
    showPassword.classList.remove('fa-eye')
    showPassword.classList.add('fa-eye-slash')
  }
  else {
    password.type = "password"
    showPassword.classList.remove('fa-eye-slash')
    showPassword.classList.add('fa-eye')
  }
}

function togglePassword2() {
  let showPassword = document.getElementById("eyeicon-2")
  let password = document.getElementById("password-2")
    
  if (password.type === "password") {
    password.type = "text"
    showPassword.classList.remove('fa-eye')
    showPassword.classList.add('fa-eye-slash')
  }
  else {
    password.type = "password"
    showPassword.classList.remove('fa-eye-slash')
    showPassword.classList.add('fa-eye')
  }
}
function passwordValidation() {
  let password = document.getElementById("password");
  let password2 = document.getElementById("password-2")
  let passwordValue = password.value
  let passwordValue2 = password2.value
  let errorMessage = document.querySelector(".error-message")

  if (passwordValue.length < 8 && passwordValue.length < 8 && passwordValue2.length < 8 && passwordValue2.length < 8) {
    errorMessage.textContent = "Password is less than 8 characters"
    password.classList.add("error")
    password2.classList.add("error")
    document.querySelector(".password-info").style.visibility = "hidden"
     document.querySelector(".password-info").style.margin = "0"
  }
  else if (passwordValue.length < 8 && passwordValue.length < 8) {
    errorMessage.textContent = "Password is less than 8 characters"
    password.classList.add("error")
    password2.classList.remove("error")
  }
  else if (passwordValue2.length < 8 && passwordValue2.length < 8) {
    errorMessage.textContent = "Password is less than 8 characters"
    password.classList.remove("error")
    password2.classList.add("error")
  }
  else if (passwordValue !== passwordValue2) {
    errorMessage.textContent = "Password does not match!"
    password.classList.add("error")
    password2.classList.add("error")
  }
  else if (passwordValue === "" && passwordValue2 === "") {
    errorMessage.textContent = "Please enter a password"
  }
  else {
    errorMessage.textContent = ""
    password.classList.remove("error")
    password2.classList.remove("error")
    window.location = "index.html"
  }
}

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".log-in-btn").addEventListener('click', function (event) {
      event.preventDefault()
    })
  })
  
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("form").addEventListener('submit', function (event) {
      event.preventDefault()
    })
  })
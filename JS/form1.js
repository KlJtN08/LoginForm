const form = document.getElementById("loginForm")
const submitBtn = document.getElementById("submitBtn")
const loginText = document.querySelector("#loginText")
const fieldForm = document.querySelector(".fieldForm")
const emailInput = document.querySelector(".email")
const passwordInput = document.querySelector(".password")
const valdiationResult = document.querySelector("#validationResult")
const errorMessageEmail = document.querySelector(".errorMessageEmail")
const errorMessagePassword = document.querySelector(".errorMessagePassword")


form.addEventListener("submit", function(e){
    
    e.preventDefault();

    let formData = new FormData(form)
    let email = formData.get("email")
    let password = formData.get("password")

    validationData(email,password)
})


function validationData(email, password) {
    if (!email || !email.includes("@")){
        emailInput.classList.add("error")
        errorMessageEmail.textContent = "Email non valida!"
    } else {
        emailInput.classList.remove("error")
        errorMessageEmail.textContent = ""

    }

    if (!password || password.length < 8){
        passwordInput.classList.add("error")
        errorMessagePassword.textContent = "Passsword non valida!"
    } else {
        passwordInput.classList.remove("error")
        errorMessagePassword.textContent = ""

    }
}

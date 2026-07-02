const form = document.getElementById("loginForm")
const submitBtn = document.getElementById("submitBtn")
const loginText = document.querySelector("#loginText")
const fieldForm = document.querySelector(".fieldForm")
const emailInput = document.querySelector(".email")
const passwordInput = document.querySelector(".password")
const valdiationResult = document.querySelector("#validationResult")


form.addEventListener("submit", function(e){
    
    e.preventDefault();

    let formData = new FormData(form)
    let email = formData.get("email")
    let password = formData.get("password")

    validationData(email,password)
})

submitBtn.addEventListener("click", function(e){
    
})

function validationData(email, password) {
    if (!email || !email.includes("@")){
        emailInput.classList.add("error")
    } else {
        emailInput.classList.remove("error")
    }

    if (!password || password.length < 8){
        passwordInput.classList.add("error")
    } else {
        passwordInput.classList.remove("error")
    }
    return
}

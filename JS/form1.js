const form = document.getElementById("loginForm")
const submitBtn = document.getElementById("submitBtn")
const loginText = document.querySelector("#loginText")
const fieldForm = document.querySelector(".fieldForm")
const emailInput = document.querySelector(".email")
const passwordInput = document.querySelector(".password")
const valdiationResult = document.querySelector("#validationResult")
const errorMessage = document.querySelector(".errorMessage")


form.addEventListener("submit", function(e){
    
    e.preventDefault();

    let formData = new FormData(form)
    let email = formData.get("email")
    let password = formData.get("password")

    validationData(email,password)
})


function validationData(email, password) {

    if (email == "" || password == "" || !email || !password){
        emailInput.classList.add("error")
        passwordInput.classList.add("error")
        errorMessage.textContent = "Inserire tutti i campi"
    } else {
        if (!email.includes("@")){
            emailInput.classList.add("error")
            passwordInput.classList.add("error")
            errorMessage.textContent = "I campi inseriti non sono validi!"
        } else {
            if (password.length < 8 || password.length > 32){
                emailInput.classList.add("error")
                passwordInput.classList.add("error")
                errorMessage.textContent = "Inserisci una password compresa tra 8 e 32 caratteri"
            } else {
                emailInput.classList.remove("error")
                passwordInput.classList.remove("error")
                errorMessage.textContent = ""
            }
        }
    }

}



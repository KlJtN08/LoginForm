const form = document.getElementById("loginForm");
const resultDiv = document.getElementById("result");
const directAccessBtn = document.getElementById("directAccess");

form.addEventListener("submit", function(e){
   
    e.preventDefault()

    let formData = new FormData(form);
    let email = formData.get("email");
    let password = formData.get("password");

    console.log("Email", email)
    console.log("Password", password)
    validateData(email, password)
})

directAccessBtn.addEventListener("click", function(e){
    
    let email = form.email.value
    let password = form.password.value
    
    console.log("Email", email)
    console.log("Password", password)
    validateData(email, password)
})

function validateData(email, password){
    if (!email) {
        showError("email", "Email richiesta")
        return {valid: false, message: "Email richiesta"}
    }
    if (!password) {
        showError("password", "Password richiesta")
        return {valid: false, message: "Password richiesta"}
    }
}

function showError(field, message){
    let formField = form[field]
    formField.classList.add("error")
    resultDiv.textContent = message
}


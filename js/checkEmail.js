let emailError = document.getElementById("emailError")

function checkEmail(email) {
    let checkEmail = String(email)
    if (!(checkEmail.includes("@gmail.com") || checkEmail.includes("@mail.ru"))) {
        emailError.innerText = "This email must contains @gmail.com or @mail.ru";
        return false
    }
    return true
}
export {checkEmail}
let telError = document.getElementById("telError")

function checkNumber(phone) {
    let phoneNumber = String(phone)
 
    if (phoneNumber.length!=13) {
        telError.innerText = "This number must have 13 symbol"
        return false 
    }
    if (phoneNumber.replaceAll(/[0-9]/g, "")!="+") {
        telError.innerText = "This number must have only numbers and +"
        return false 
    }
    if (!phoneNumber.startsWith("+375")) {
        telError.innerText = "This number must start with +375"
        return false

    }
    return true
}
export {checkNumber}
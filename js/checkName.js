let nameError = document.getElementById("nameError")

function checkName(nameData) {
    let name = String(nameData)
    if (name.trim().length<2) {
        nameError.innerText = "Length less 2 symbol"
        return false
    }
    if (name.replaceAll(/[0-9]/g,"").length==0) {
        nameError.innerText = "This name must have only letter"
        return false
    }
    return true
    
}
export {checkName}
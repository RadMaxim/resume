import { createCards } from "./js/addCards.js"
import { checkDate } from "./js/checkDate.js"
import { checkEmail } from "./js/checkEmail.js"
import { checkName } from "./js/checkName.js"
import { checkNumber } from "./js/checkPhone.js"


function validation() {
    let formData = document.getElementById("formData")
        formData.addEventListener("submit",(e)=>{
    e.preventDefault();
        let data = e.target;
        let fD = new FormData(data)
        const datas = Object.fromEntries(fD.entries());
        let {nameId, telId, timeId, emeilId} = datas;
        console.log("sfwef");
        
        if (checkName(nameId) && checkDate(timeId) &&checkNumber(telId) && checkEmail(emeilId)) {
            createCards(datas)
        }
       
     
      
       
        
       
        
        
        
})
}
export {validation}



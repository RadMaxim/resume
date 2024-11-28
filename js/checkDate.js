let timeError = document.getElementById("timeError")
const older = new Date("1910-01-01")

function checkDate(date) {
    const inputDate = new Date(date);
   
   
    

   
const today = new Date(); 
   if (today<inputDate) {
    timeError.innerText = "Error: this data late today"
  return false 
    
   }
  
   
   if (older>today) {
    timeError.innerText = "You too old"
    return false 
   }
   return true

   
    
}
export {checkDate}
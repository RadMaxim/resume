import { imgCard } from "./fileImg.js";
const rightContainer = document.getElementById("rightContainer")
const cards = []
function createCards(card) {
    card = {...card, src:imgCard}
    cards.push(card)
    
    
    let list = cards.reduce((buf, {nameId, telId, timeId, emeilId,src})=>{
      
         buf+=`<div class="card_elem">
                        <div class="card_name">
                        <h3>${nameId}</h3>
                               
                        </div>
                        <div class="card_phone">
                        <p> ${telId}</p>
                        </div>
                    
                        <div class="card_email">
                        <p> ${emeilId}</p></div>
                        <div class="card_date">
                        <p> ${timeId}</p></div>
                        <div class="card_img">
                        <img src="${src}" alt="">
                        </div>
                        <div id="addTheme"></div>
 <button class="add_theme">Add</button>
                    </div>`
    
    return buf;            
},``);
        rightContainer.innerHTML =  list;


        let add_theme = document.getElementsByClassName("add_theme")
        let addTheme = document.getElementById("addTheme")
        let theme = `<div class="t" >
        <div>
            <h3 contenteditable="" class="block_header"> block_header</h3>
        </div>
        
     <div class="hobbyes">
      
       </div>
       <button class="add_hobby">Add</button>
       `
       let hobbyes = document.getElementsByClassName("hobbyes")
       
       Array.from(add_theme).forEach((elem, index)=>{
        elem.addEventListener("click",(e)=>{
            let hobby_arr = []
            addTheme.innerHTML+=theme
            cards[index].arr = theme
            let hob = document.getElementsByClassName("add_hobby")
          
            let hobby = `<div class="hobby">
                <h4 contenteditable="" class="field_title">field title</h4>
                <p contenteditable="">Content</p>
            </div></div>`
            Array.from(hob).forEach((elemH, ind)=>{
                elemH.addEventListener("click", (e)=>{
                    hobby_arr.push(hobby)
                    cards[index].hobby = hobby_arr;
                    console.log(cards);
                    
                    document.getElementsByClassName("hobbyes")[ind].innerHTML=hobby_arr.join("")
                        
                    
                   
                  
                    
                   
                    
                })
            })
            
            

})
       })


    

}
export {createCards}
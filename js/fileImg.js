import { checkImg } from "./checkImg.js";
let imgCard;
const imageUpload = document.getElementById("imageUpload");
const previewContainer = document.getElementById("previewContainer");
function loadImg() {
    imageUpload.addEventListener("change", (e)=> {
       
        previewContainer.innerHTML = "";
        const files = e.target.files;
       
        
        if (!files) return;
        
            let file = files[0]
            if(!checkImg(file))
                return
           
    
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement("img");
                img.src = e.target.result; 
                imgCard = e.target.result  
                previewContainer.appendChild(img);
            };
    
            reader.readAsDataURL(file);
});
    };



export {loadImg,imgCard}
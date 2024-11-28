const errorImg = document.getElementById("errorImg")

function checkImg(img) {
    if (!img.type.startsWith("image/")) {
        errorImg.innerText = "Пожалуйста, выберите файл изображения!"
        return false;
    }
    return true;
}
export {checkImg}
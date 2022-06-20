

function OneImageWorthMoreThanAThousantTexts(){
    let images = document.querySelectorAll("img");
    for(let image of images){
        let description = image.alt;
        let newNode = document.createElement("p");
        newNode.appendChild(document.createTextNode(description));
        image.parentNode.replaceChild(newNode, image);
    }
}
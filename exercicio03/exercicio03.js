function swipeImg(){
    let imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
        let parent = img.parentElement;
        let p = document.createTextNode(img.alt)
        parent.removeChild(img);
        parent.appendChild(p);
    })
}
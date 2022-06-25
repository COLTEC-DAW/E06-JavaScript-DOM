function mainEx3(){
    let imgs = querySelector("img");

    imgs.forEach(img => {
        img.parentElement.insertBefore(document.createTextNode(img.alt), image);
        img.parentElement.removeChild(img);
    })
}


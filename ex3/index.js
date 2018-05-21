function changeTheImgs() {
    var imgs = document.getElementsByTagName("img");
    console.log(imgs.length);
    
    for (let index = 0; index < imgs.length; index++) {
        var parent = imgs[index].parentElement;
        var text = imgs[index].alt;
        var textNode = document.createTextNode(text);
        
        parent.insertBefore(textNode, imgs[index]);
        parent.removeChild(imgs[index]);
    }
}   
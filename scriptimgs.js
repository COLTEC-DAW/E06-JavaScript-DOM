function Mudarfoto() {
    var fotos = document.getElementsByTagName("img");
    console.log(fotos.length);
    
    for (let i = 0; i < fotos.length; i++) {
        var parent = fotos[i].parentElement;
        var text = fotos[i].alt;
        var textNode = document.createTextNode(text);
        
        parent.insertBefore(textNode, fotos[i]);
        parent.removeChild(fotos[i]);
    }
}    
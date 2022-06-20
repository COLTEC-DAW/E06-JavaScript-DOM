function imgParaTexto() {
    var imgs = document.getElementsByTagName("img");

    for (let i = 0; i < imgs.length; i++) {
        
        var pai = imgs[i].parentElement;
        var texto = imgs[i].alt;
        var textNode = document.createTextNode(texto);
        pai.replaceChild(textNode, imgs[i]);

    }
}   
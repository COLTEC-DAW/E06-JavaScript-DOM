function mostraDescricao(){
    var imagens = document.getElementsByTagName("img");
    
    while(imagens.length > 0){
        var parent = imagens[0].parentElement;
        var descricao = imagens[0].alt;
        var aux = document.createTextNode(descricao);

        parent.insertBefore(aux, imagens[0]);
        parent.removeChild(imagens[0]);
    }

}
function textoImagem(){
    //Pegar o numero de imagens
    var numImagens = document.getElementsByTagName("img").length;
    //Percorrer todas as imagens
    for(var i=0;i<numImagens;i++){
        //Setar display none em cada imagem
        document.getElementsByTagName("img")[0].style.display = "none";
        //Pegar o texto da imagem
        var textoImagem = document.getElementsByTagName("img")[i].alt;
        //Mostrar o texto de cada imagem
        console.log(textoImagem);
    }
}
//Chamar funcao
textoImagem();
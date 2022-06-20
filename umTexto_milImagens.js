function umTexto_milImagens(){

    let imagens = [].slice.call(document.getElementsByTagName("img"));

    imagens.forEach(imagem => { 

        let nos_parentes = imagem.parentElement;
        let texto = document.createTextNode(imagem.alt.toString());

        nos_parentes.removeChild(imagem);
        nos_parentes.appendChild(texto);

    });

}
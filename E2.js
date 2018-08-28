function buscaTag(tag){
    //Pegar o tamanho da tag
    var numTags = document.getElementsByTagName(tag).length;
    //Mostrar quantas tags existem
    console.log(numTags);
    //Mostrar cada elemento
    for (i=0;i<numTags;i++){
        console.log(document.getElementsByTagName(tag)[i]);
    }
}
//Faça o teste com o código HTML da matéria. Quantos <section> existem? Quantos links a apresentação possui? Quantas Imagens?

//Section: 84 encontradas!!
buscaTag("SECTION");

//Links: 4 encontrados!
buscaTag("link");

//Imagens: 6 encontradas!
buscaTag("img");
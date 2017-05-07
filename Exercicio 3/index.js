function transformar(){
    
    //REMOVE IMAGENS
    var parent = document.getElementById("div1"); //PAI
    var child = document.getElementsByTagName("img"); //FILHO
    while(child.length>0){
        console.log(child.length);
        parent.removeChild(child[0]);
    }

    //ADICIONA DESCRIÇÕES
    var p = document.createElement("p"); //CRIA ELEMENTO
    var node = document.createTextNode("Pica Pau putasso dentro de uma lata de lixo, prestes a cometer um crime de suicidio após saber que o Magrelinho morreu.");    //Seta o texto do paragrafo
    var quebra = document.createElement("br");
    p.appendChild(node);
    p.appendChild(quebra);
    var element = document.getElementsByTagName("div");    //PAI
    element[0].appendChild(p); //adiciona elemento(filho) ao pai (Paragrafo à div)


    var p = document.createElement("p"); //CRIA ELEMENTO
    var node = document.createTextNode("Zeca Urubu,trajado com um verde bem topster, está com o dedo levantado e com uma expressão de vigarista e prestes a dizer que irá fazer sua maior vigarice");    //Seta o texto do paragrafo
    var quebra = document.createElement("br");
    p.appendChild(node);
    p.appendChild(quebra);
    var element = document.getElementsByTagName("div");    //PAI
    element[0].appendChild(p); //adiciona elemento(filho) ao pai (Paragrafo à div)
}
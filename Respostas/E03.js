function removeImagens(){
    var parent = document.getElementById("div1");
    var child = document.getElementsByTagName("img");
    while(child.length > 0){
        console.log(child.length);
        parent.removeChild(child[0]);
    }
 
   var QuebraLinha = document.createElement("br");
   var criaElem = document.createElement("p");
   var node = document.createTextNode("Primeira imagem: Professor Leandro Maia segurando um vira-lata caramelo assustado de sainha (no caso o chocorro está de saia, não o professor.)");
   criaElem.appendChild(node);
   criaElem.appendChild(QuebraLinha);
   var elem = document.getElementsByTagName("div");
   elem[0].appendChild(criaElem);
 
   QuebraLinha = document.createElement("br");
   criaElem = document.createElement("p");
   node = document.createTextNode("Segunda imagem: Professor Humberto Honda sendo humilde e pegando ônibus com seus alunos.");
   criaElem.appendChild(node);
   criaElem.appendChild(QuebraLinha);
   elem = document.getElementsByTagName("div");
   elem[0].appendChild(criaElem);
}

function getByName(node, elem){
     var vetor = [];
     for (i = 0; i < node.childNodes.length; i++ ){
        var filho = node.childNodes[i];
        if (filho.tagName != undefined){
        if(filho.tagName == elem){
            vetor.push(filho)
        }
    
        var filho1 = getByName(filho, elem);
        //executará a função para cada elemento do vetor
        filho1.forEach(element => {
            //adiciona no final do vetor 
            vetor.push(element)
        });
     }
    }
     return vetor;
}
console.log(getByName(document.body, "SECTION"));
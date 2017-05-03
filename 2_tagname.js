function transformaEmTag(string){
    var saida = "<";
    saida = saida.concat(string);
    saida = saida.concat(">");
    return saida;
}

//Como passar a página inteira?

function getElementsByTagNameFFN(node, string){
    string = transformaEmTag(string);
    return busca(node, string);
}

function busca(node, tagName){
    console.log("String " + tagName)
    var saida = [];
    console.log(node.childNodes.lenght); //node.childNodes = undefined; MAS PORQUE?!?!?? Problema de teste talvez?
    for (var i=0; i<node.childNodes.lenght; i++){
        console.log("lOOOOOpsy");
        var noFilho = node.childNodes[i];
        if (noFilho.childNodes.lenght > 0) saida.push(busca(noFilho, tagName));
        else if (noFilho.nodeValue != null && noFilho.nodeValue.indexOf(tagName) > -1){
            console.log(noFilho.nodeValue);
            saida.push(noFilho.nodeValue);
        }
    }
    return saida;
}
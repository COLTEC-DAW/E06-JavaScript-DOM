function IMGtoText(node){
    var saida = [];
    for (var i=0; i<node.childNodes.lenght; i++){
        console.log("lOOOOOpsy");
        var noFilho = node.childNodes[i];
        if (noFilho.childNodes.lenght > 0) IMGtoText(noFilho, tagName);
        else if (noFilho.nodeValue != null && noFilho.nodeValue.indexOf(tagName) > -1){
            console.log(noFilho.nodeValue);
        }
    }
}
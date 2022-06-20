function getByName(node, string) {
    string.toUpperCase()
    var listaElementos = [];

    for (var i = 0; i < node.childNodes.length; i++) {
        var childNode = node.childNodes[i];
        if(childNode.childNodes.length > 0) getByName(childNode, string); 
        if(childNode.tagName == string && childNode.tagName !== null) listaElementos.push(childNode);
    }
    console.log(listaElementos);
    return listaElementos;
  }
  

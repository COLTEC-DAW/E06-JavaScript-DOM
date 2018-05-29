function getElementByTag(node, string) {
    string.toUpperCase()
    var lista = [];
    var controle = []
    for (var i = 0; i < node.childNodes.length; i++) {
      var childNode = node.childNodes[i];
      if(childNode.childNodes.length > 0){
        controle = talksAbout(childNode, string);
      console.log(controle);
        lista.concat(controle);
  
      } else if(childNode.tagName != null && childNode.tagName == string){
        lista.push(childNode)
      }
    }
    return lista;
  }
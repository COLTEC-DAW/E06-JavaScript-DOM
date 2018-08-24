function getElementByTag(node, string) {
  string.toUpperCase()
  var list = [];
  var aux = []
  for (var i = 0; i < node.childNodes.length; i++) {
    var childNode = node.childNodes[i];
    if(childNode.childNodes.length > 0){
      aux = talksAbout(childNode, string);
    console.log(aux);
      list.concat(aux);

    } else if(childNode.tagName != null && childNode.tagName == string){
      list.push(childNode)
    }
  }
  return list;
}

getElementByTag(document.body, "SECTION");

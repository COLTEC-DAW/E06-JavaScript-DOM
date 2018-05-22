function getByName(node, elem){
  var lista = []
 for (var i = 0; i < node.childNodes.length; i++) {
   var childNode = node.childNodes[i]
   if(childNode.tagName == elem)
     lista.push(childNode[i])
 }
 return lista
}

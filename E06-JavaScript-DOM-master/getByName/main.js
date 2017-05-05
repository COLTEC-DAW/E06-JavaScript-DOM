function getByName(node, string) {
  var count = 0;
  for (var i = 0; i < node.childNodes.length; i++) {
    var childNode = node.childNodes[i];
    if(childNode.childNodes.length > 0)
      count += getByName(childNode, string);
    else if(childNode.nodeValue != null &&
            childNode.nodeValue.indexOf(string) > -1)
      count ++;
  }
  return count;

}

//para executar teste
var body = document.getElementsByTagName('body')[0];
tag = "P";
console.log("A tag "+ tag + " foi encontrada " + getByName(body,tag) + " vezes.");

var tag = "SECTION";
console.log("A tag "+ tag + " foi encontrada " + getByName(body,tag) + " vezes.");

tag = "IMG";
console.log("A tag "+ tag + " foi encontrada " + getByName(body,tag) + " vezes.");

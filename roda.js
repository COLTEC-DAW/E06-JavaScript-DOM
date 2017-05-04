function getRodaAgain(node, string) {
    var array = [];

    for (var i = 0; i < node.childNodes.length; i++) {
        var childNode = node.childNodes[i];

        if(childNode.tagName != undefined){

            if( childNode.tagName.toLowerCase() == string.toLowerCase()){
                array.push(childNode);
            }

            var child2 = getRodaAgain(childNode, string);
         
            child2.forEach(function(element){
                array.push(element);
            });
        }
    }

  return array;
}

console.log(getRodaAgain(document.body, "section")); 
function getByName(node, elem) {
    var array = [];

    for (var i = 0; i < node.childNodes.length; i++) {
        var filho = node.childNodes[i];
        if(filho.tagName != undefined){
            if( filho.tagName == elem){
                array.push(filho);
            }
            var children = getByName(filho, elem);
            children.forEach(function(element){
                array.push(element);
            });
        }
    }
  return array;
}

console.log(getByName(document.body, "SECTION"));
console.log(getByName(document.body, "A"));
console.log(getByName(document.body, "IMG"));

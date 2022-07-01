function getByName(node, elem){
    var elementos = [];
    for (i = 0; i < node.childNodes.length; i++ ){
       var child = node.childNodes[i];
       if (child.tagName != undefined){
       if(child.tagName == elem){
           elementos.push(child)
       }

        var child1 = getByName(child, elem);
        child1.forEach(element => {
        elementos.push(element)
       });
    }
   }
    return elementos;
}
console.log(getByName(document.body, "SECTION"));
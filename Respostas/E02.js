function getByName(elem){
    var array = []
    busca(document.body, elem.toUpperCase(), array)
    return array
}

function search(node, tag, arrayElements){
    for (var filho of node.childNodes){
        if (filho.childNodes.length != 0) {
            search(filho, tag, arrayElements)
        } 
        if (filho.tagName == tag) {
            arrayElements.push(filho)
        }
    } return arrayElements
}
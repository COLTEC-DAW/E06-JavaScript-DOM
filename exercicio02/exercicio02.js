function selectTagName(search){
    let resultado = []
    search = search.toUpperCase();
    var currentNode, ni = document.createNodeIterator(document, NodeFilter.SHOW_ELEMENT)

    while(currentNode = ni.nextNode()) {
        if(currentNode.tagName.localeCompare(search)==0){
            resultado.push(currentNode)
        }
    }
    return resultado
}
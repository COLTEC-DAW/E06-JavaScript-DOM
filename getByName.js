function search(node, tag, listOfElements) {
    if(!node.hasChildNodes) return;
    if(node.tagName === tag) listOfElements.push(node);
    for(let i = 0; i < node.childNodes.length; i++){
        search(node.childNodes[i], tag, listOfElements);
    }
}

function getByName(){
    let tag = document.getElementById("elementTag").value;
    let elementsList = [];
    search(document, tag, elementsList);
    return elementsList;
}

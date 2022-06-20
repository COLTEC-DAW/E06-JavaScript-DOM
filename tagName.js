function _getElementsByTagName(node, tag, list){
    if(!node.hasChildNodes){
        return;
    }
    let nodes = node.childNodes;
    for(let value of nodes){
        if(tag == value.tagName){
            list.push(value);
        }
        _getElementsByTagName(value, tag, list);
    }
}



function GetElementsByTagName(tag){
    let elements = [];
    _getElementsByTagName(document, tag.toUpperCase(), elements)
    return elements
}
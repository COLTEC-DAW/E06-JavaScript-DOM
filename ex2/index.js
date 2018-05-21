function triggerTalksAbout() {
    getByName(document.body, document.getElementById("string").value);
}
function getByName(node, string) {
    var list = [];
    for(index = 0; index < node.childNodes.length; index++) {
        var childNode = node.childNodes[index];
        if(childNode.childNodes.length > 0) {
            if(childNode.tagName != null) {
                if (isEqual(childNode.tagName, string)) {
                    list.push(childNode);
                }
            }
            //getByName(childNode, string);
        } else if(childNode.tagName != null) {
            if (isEqual(childNode.tagName, string)) {
                list.push(childNode);
            }
        }
    }

    console.log(list);
}

function isEqual (tagName, stringTag) {
    return tagName.toLowerCase() === stringTag.toLowerCase();
}
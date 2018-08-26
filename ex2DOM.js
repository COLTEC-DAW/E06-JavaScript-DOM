function getTag(node, string) {
    var result = 0;
    for (var i = 0; i < node.childNodes.length; i++) {
        var childNode = node.childNodes[i];

        if(childNode.childNodes.length > 0)
            result += getByName(childNode, string);
        else if(childNode.nodeValue != null && childNode.nodeValue.indexOf(string) > -1)
            result ++;
    }
    
    return result;
   }

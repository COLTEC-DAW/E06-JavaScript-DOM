/*
function getbyName(node, string) {
    var elementos = [];
    for (var i = 0; i < node.childNodes.length; i++) {
        var childNode = node.childNodes[i];

		}        
    }
    return elementos;
}
var body = document.getElementsByTagName('body')[0];
console.log(getbyName(body, "section"));
*/
function getByName(node, tag, cont) {
    var filho = node.childNodes;
	for(var i=0; i<filho.length; i++) {
		//se achar o elemento com tag igual
        if(tag == filho[i].nodeName){
            cont++;
        }
        //se o elemento tiver mais filhos
        if(filho[i].childNodes.length>0){
            cont = getByName(filho[i],tag,cont);
        }
	}
	return cont;
}
var body = document.getElementsByTagName('body')[0];
console.log(getByName(body, "SECTION", 0)); //84
console.log(getByName(body, "IMG", 0));     //7
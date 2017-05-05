function search(node, elem, lista){
	if(node.tagName == elem){
		lista.push(node);
	}
	for (var i = 0; i < node.children.length; i++) {
		lista = search(node.children[i], elem, lista);
	}
	return lista;
}

function getByName(elem){
	var lista = search(document.body, elem, []);
	return lista;
}
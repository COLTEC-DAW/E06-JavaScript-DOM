function busca(node, elem, lista){
	if(node.tagName == elem){
		lista.push(node);
	}
	for(var i = 0; i < node.children.length; i++){
		lista = busca(node.children[i], elem, lista);
	}
	return lista;
}

function getByName(elem){
	var lista = busca(document.body, elem, []);
	return lista;
}
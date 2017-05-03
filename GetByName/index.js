/*****Expandi o programa para pegar qualquer propriedade que eu quiser, 
mandando a funcao de criterio por parametro*****/

function getByName(node, tag, condicao) {
	var resultado = [];

	for(var i = 0; i < node.childNodes.length; i++) {
		var filho = node.childNodes[i];

		if(filho.tagName != undefined) {
			if(condicao(filho, tag)) {
				resultado.push(filho);
			}
			
			var filhote = getByName(filho, tag, condicao);
			filhote.forEach(function(element) {
				resultado.push(element);
			});
		}

	}

	return resultado;
}

//Por Tag Name
function tagName(filho, tag) {
	return filho.tagName.toLowerCase() == tag.toLowerCase();
}

//Por Classe
function className(filho, tag) {
	//Verificar cada uma das possiveis varias classes
	var classes = filho.className.split(' ');

	return classes.some(function(element) {
		return element.toLowerCase() == tag.toLowerCase();
	});
}

//Por ID
function idName(filho, tag) {
	return filho.id.toLowerCase() == tag.toLowerCase();
}

var body = document.getElementsByTagName('body')[0];

//Casos de teste
console.log(getByName(body, "section", tagName));
console.log(getByName(body, "a", tagName));
console.log(getByName(body, "img", tagName));
//Pega slide atual
console.log(getByName(body, "active", className));
//Pega slide de numero 53
console.log(getByName(body, "53", idName));
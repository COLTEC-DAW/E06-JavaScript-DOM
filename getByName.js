function getByName(node, tag) 
{
	var resultado = [];

	for (var i = 0; i < node.childNodes.length; i++) 
    {
		var filho = node.childNodes[i];

		if(filho.tagName != undefined)
         {
		    resultado.push(filho);
			
			var f = getByName(filho, tag, condicao);

			f.forEach(function(element)
             {
				resultado.push(element);
			});
		}

	}

	return resultado;
}

var body = document.getElementsByTagName('body')[0];

console.log(getByName(body, "section"));
console.log(getByName(body, "a"));
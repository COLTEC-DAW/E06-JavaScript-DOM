function transforma() {
	var texto = document.getElementsByTagName("textarea")[0].value;
	var table = document.getElementsByTagName("table")[0];
	var children = table.childNodes;
	var tamanho = children.length;
	var linhas = texto.split('\n');
	var tabela = [];

	//Deleta o que estava antes
	for(var i = 0; i < tamanho; i++) {
		console.log(children);
		table.removeChild(children[0]);
	}

	for(var i = 0; i < linhas.length; i++) {
		tabela[i] = linhas[i].split(',');
	}

	for(var i = 0; i < tabela.length; i++) {
		var linha = document.createElement("tr");

		for(var j = 0; j < tabela[i].length; j++) {
			var coluna = document.createElement("td");
			var valor = document.createTextNode(tabela[i][j]);
			
			coluna.appendChild(valor);
			linha.appendChild(coluna);
		}

		table.appendChild(linha);
	}

	/*Eduardo,17,Programador
João,61,Aposentado
Pedro,21,Engenheiro
Eva,48,Artista*/
}
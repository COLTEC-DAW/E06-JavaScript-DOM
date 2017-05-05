function envia() {
	var texto = document.getElementById("texto").value;
	var table = document.getElementById("tabela");
	var numlinhas=1;
	var numcelulas=1;
	var row = table.insertRow(numcelulas-1);

	for (var i = 0; i < texto.length; i++){
		if (texto.charAt(i)==';') {
			var separada="as";
			separada=separada.split();
			texto=texto.split();
			for (var j = 0; j < i-1; j++) {
				separada[j]=texto[j];
			}
			separada=separada.join('');
			texto=texto.join('');
			var cell = row.insertCell(numlinhas-1);
			cell.innerHTML = separada;
			numlinhas++;
			console.log(separada);
		}
		if (texto.charAt(i)=='.') {
			var separada="ad";
			separada=separada.split();
			texto=texto.split();
			for (var j = 0; j < i-1; j++) {
				separada[j]=texto[j];
			}
			separada=separada.join('');
			texto=texto.join('');
			var row = table.insertRow(numcelulas-1);
			var cell = row.insertCell(numlinhas-1);
			cell.innerHTML = separada;
			numlinhas++;
			numcelulas++;
			console.log(separada);
		}
	}
}


	
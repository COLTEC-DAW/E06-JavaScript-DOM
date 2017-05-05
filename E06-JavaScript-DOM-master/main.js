function converter(){

	var txt = document.getElementById("tabelinha").value;
	var linhas=txt.split("\n");

	var table = document.getElementById("tabelafinal");
	var tam = linhas.length -1;

	for(var i=tam;i>=0;i--){
		var linha = table.insertRow(0);
		var celulas = linhas[i].split(",");
		for(var j=0;j<celulas.length;j++){
			var celula = linha.insertCell(j);
			celula.innerHTML = celulas[j];
		}
	}

}
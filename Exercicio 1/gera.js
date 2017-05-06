function transformatextoemtbl(texto){
	var textoemtabela=[];
	var linhas = texto.split('\n');
	for(i = 0; i<linhas.length; i++) {
 		textoemtabela[i] = linhas[i].split(',');
 	}
	return textoemtabela;
}

function gera(){
    var texto = document.getElementsByTagName("textarea")[0].value;
    var tbl = document.getElementsByTagName("table")[0];
	var tabela = transformatextoemtbl(texto);

	//REMOVE TUDO QUE TINHA ANTERIORMENTE
	while(tbl.childNodes.length>0){
		tbl.removeChild(tbl.childNodes[0]);
	}
	
	//CRIA A TABELA
	for(i=0; i<tabela.length; i++) {
 		var linha=document.createElement("tr");
 		for(j=0; j<tabela[i].length;j++) {
 			var coluna = document.createElement("td");
 			var valor = document.createTextNode(tabela[i][j]);  
            coluna.appendChild(valor);
 			linha.appendChild(coluna);
        }
        tbl.appendChild(linha);
	}
}

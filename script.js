function functionteste(){
    var str = document.getElementById("entrada"); 
    var teste = str.value.split("\n");


	for(var i = 0; i < teste.length; i++) {
		teste[i] = teste[i].split(',');
	}

    var x = document.getElementById("table");
    
    for(var i = 0; i < teste.length; i++){
        var linha = document.createElement("tr")
        for(var j = 0; j< teste[i].length; j++){
            var item = document.createElement("td")
            item.innerHTML = teste[i][j]
            linha.appendChild(item)
        }
        x.appendChild(linha)
    }

    console.log();
}
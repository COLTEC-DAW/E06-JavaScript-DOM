function converte(){

    var csv = document.getElementById("csv").value;
	var table = csv.split("\n");

    var tabela = document.getElementById('table')
	for(var i = 0; i < table.length; i++) {
		table[i] = table[i].split(',');
	}

	for(var i = 0; i < table.length; i++){
        var row = document.createElement("tr")
        for(var j = 0; j< table[i].length; j++){
            var data = document.createElement("td")
            data.innerHTML = table[i][j]
            row.appendChild(data)
        }
        tabela.appendChild(row)
    }
    console.log(tabela)
    document.getElementById('text').innerHTML = "Tabela :)"
    var parent = document.getElementById('form')
    var child = document.getElementById('csv')
    console.log(child)
    parent.removeChild(child)
}

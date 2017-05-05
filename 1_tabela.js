function csvToTable(){
    var csv = document.getElementsByTagName("textarea")[0].value;
    console.log(csv);
    var table = document.getElementsByTagName("table")[0];
    var linhas = csv.split(";");
    console.log(linhas);
    for (var i=0; i<csv.length; i++){
        var row = document.createElement("tr");
        console.log(linhas[i]);
        var celulas = linhas[i].split(",");
        console.log(celulas);
        for (var j=0; j<celulas.length; j++){
            var dado = document.createElement("td");
            var txtzin = document.createTextNode(celulas[j]);
            console.log(celulas[j]);
            dado.appendChild(txtzin);
            console.log(dado);
            row.appendChild(dado);
        }
        table.appendChild(row);
    }
}
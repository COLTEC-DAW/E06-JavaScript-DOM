//Como testar?

function csvToTable(csv){
    var table = document.createElement("table");
    var linhas = csv.split(";");
    for (var i=0; i<csv.length; i++){
        var row = document.createElement("tr");
        var celulas = linhas.split(", ");
        for (var j=0; j<celulas.length; j++){
            var dado = document.createElement("td");
            td.value = celulas[j];
            row.appendChild(td);
        }
        table.appendChild(row);
    }
    document.appendChild(table);
}
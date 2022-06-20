function table(){
    
    let csv = document.getElementById("texto").value;
    let mincsv = csv.split("\n");
    
    let table = document.createElement("table");

    for(var c in mincsv){
        let row = document.createElement("tr");
        let arraytexto = mincsv[c].toString().split(",");
        for(var x in arraytexto){
            let cell = document.createElement("td");
            let text = document.createTextNode(arraytexto[x]);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}
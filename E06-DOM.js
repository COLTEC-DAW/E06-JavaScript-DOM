function csvToHtml(){
    let table = document.createElement("table");
    let csv = document.getElementById("csvTable").value;
    let csvArray = csv.split("\n");

    for(var i in csvArray){
        let row = document.createElement("tr");
        let elem = csvArray[i].split(",");
        
        for(var j in elem){
            let data = document.createElement("td");
            let node = document.createTextNode(elem[j]);
            
            data.appendChild(node);
            row.appendChild(data);
        }
        
        table.appendChild(row);
    }
    
    document.body.appendChild(table);
}
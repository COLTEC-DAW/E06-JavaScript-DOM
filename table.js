function createTable(csvRepresentation){

    let lines = csvRepresentation.split("\n");
    let tableData = [];
    let collumns = lines[0].split(",");

    collumns.forEach((value) => { tableData.push(value); } );

    lines.forEach((line, index) => {
        if(index != 0){
            let values = line.split(",");
            let newLine = [];
            values.forEach((value) => { newLine.push(value); });
            tableData.push(newLine);
        }
    });

    let table = document.createElement("table");
    
    tableData.forEach((line) => {
        let tableRow = document.createElement("tr");
        for(value of line){
            let tableData = document.createElement("td");
            tableData.appendChild(document.createTextNode(value));
            tableRow.appendChild(tableData);
        }
        table.appendChild(tableRow);
    })

    return table;

}
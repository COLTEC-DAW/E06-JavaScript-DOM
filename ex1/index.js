function csvTohtml () {
    var csv     = document.getElementById("csv");
    var tbl     = document.getElementById("myTable");
    var tblBody = document.getElementById("tbody");
    var lines   = csv.value.split(" "); 
    console.log(lines);
    
    for (var index = 0; index < lines.length; index++) {
        let words = lines[index].split(";");
        var row = document.createElement("tr");
        console.log(words);
        
        for(var j = 0; j < words.length; j++) {
            var cell =  document.createElement("td");
            var cellText = document.createTextNode(words[j]);
            
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    csv.value = "";
}
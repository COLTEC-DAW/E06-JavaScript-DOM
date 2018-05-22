function TabelaCSV (string){
  string = string.split("\n")
  var table = document.createElement("table")
  for(var i = 0; i < string.length; i++){
    var tr = document.createElement("tr")
    table.appendChild(tr)
    var aux = string[i]
    aux = aux.split(",")
    for(var y = 0; y < aux.length; y++){
      var td = document.createElement("td")
      tr.appendChild(td)
      td.innerHTML = aux[y]
    }
  }
}

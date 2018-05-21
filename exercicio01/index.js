let csvCompleto = []
let linhasCsv = []
let linhas = []
let loc = window.location.pathname
let dir = loc.substring(0, loc.lastIndexOf('/'))
console.log(dir)

const csv = new XMLHttpRequest()
csv.open("GET", `http://localhost:5500/${dir}/tabela.csv`, true)
csv.onreadystatechange = function(e){
    if(csv.readyState === XMLHttpRequest.DONE && csv.status === 200) {
        csvCompleto = csv.responseText
        linhasCsv = csvCompleto.split(/\r\n|\n/);
        for(let i = 0;i<linhasCsv.length;i++){
            linhasCsv[i] = linhasCsv[i].split(",")
        }
        toTabela(linhasCsv)
        console.log(linhasCsv)
    }
}

csv.send()

function toTabela(csv){
    let table = `<table class="table table-striped">`
    for(let i = 0;i<csv.length;i++){
        table += "<tr>"
        for(let j = 0;j<csv[i].length;j++){
            table+= `<td>${csv[i][j]}</td>`
        }
        table += "</tr>"
    }
    table+="</table>"
    document.getElementById("output").innerHTML = table;
}
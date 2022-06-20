function CSVparaHTML(){

    let titulo_input = document.getElementById("titulo-input").value;
    let csv_input = document.getElementById("csv-input").value;

    let titulo = document.createTextNode(titulo_input);

    let titulo_tabela = document.getElementById("titulo_tabela");
    let conteudo = document.getElementById("conteudo");

    titulo_tabela.appendChild(titulo);

    let tabela = document.createElement("tabela");
    let tabelaCSV = csv_input.split("\n");

    tabelaCSV.forEach(function(linhas) {

        let colunas = linhas.toString().split(",");
        let linha = document.createElement("tr");

        colunas.forEach(function(celulas){
            let celula = document.createElement("td");
            celula.style.border = "1px solid black";
            let valor = document.createTextNode(celulas);
            celula.appendChild(valor);
            linha.appendChild(celula);

        })
        tabela.appendChild(linha);

    });
    
    conteudo.appendChild(tabela);
}
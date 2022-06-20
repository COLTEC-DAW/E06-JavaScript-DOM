function ConverseCSV_HTML()
{
    let titleInput = document.getElementById("titleInput").value;
    let inputText = document.getElementById("inputText").value;

    let title = document.createTextNode(titleInput);

    let Tabtitle = document.getElementById("Tabtitle");
    let Tabcontent = document.getElementById("Tabcontent");

    Tabtitle.appendChild(title);

    let table = document.createElement("table");

    let tableCSV_HTML = csv_input.split("\n");

    tableCSV_HTML.forEach(linhasTr=>{
        
        let palavrasLinhas = linhasTr.toString().split(",");
        let linhaX = document.createElement("tr");

        palavrasLinhas.forEach(PalavrasTd=>{

            let Palavra = document.createElement("td");
            let texto = document.createTextNode(Palavra);
            Palavra.appendChild(texto);
            linhaX.appendChild(Palavra);
    
        })

        table.appendChild(linha);

    });

    table_content.appendChild(table);

}

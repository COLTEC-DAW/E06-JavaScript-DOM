function ConverseCSV_HTML()
{
    let titleInput = document.getElementById("titleInput").value;
    let inputText = document.getElementById("inputText").value;

    let title = document.createTextNode(titleInput);

    let Tabtitle = document.getElementById("Tabtitle");
    let Tabcontent = document.getElementById("Tabcontent");

    Tabtitle.innerHTML="";
    Tabcontent.innerHTML="";

    Tabtitle.style.borderTop = " .1rem solid black";
    Tabtitle.style.borderRight = " .15rem solid black";
    Tabtitle.style.borderLeft = " .15rem solid black";
    Tabtitle.style.borderBottom = " .1rem solid black";

    Tabtitle.appendChild(title);

    let table = document.createElement("table");
    let tableCSV_HTML = inputText.split("\n");

    tableCSV_HTML.forEach(linhasTr=>{
        
        let palavrasLinhas = linhasTr.toString().split(",");
        let linhaX = document.createElement("tr");

        palavrasLinhas.forEach(PaLinha=>{
            let Neymar = document.createElement("td");
            let texto = document.createTextNode(PaLinha);
            Neymar.appendChild(texto);
            linhaX.appendChild(Neymar);

    
        })

        table.appendChild(linhaX);

    });

    Tabcontent.appendChild(table);

}


function troca_descIMG ()
{
    let IMG = [].slice.call(document.getElementsByTagName("img"));

    IMG.forEach(img =>
        {
           let ParenteIMG = img.parentElement;
           let description = document.createTextNode(img.alt.toString()); 
           ParenteIMG.removeChild(img);
           ParenteIMG.appendChild(description);
        });
}


function HTMLtabela() {

    let CSV_text = document.getElementById("CSV_text").value.toString();
    let tabelaArea = document.getElementById("tabelaArea");
    let tabelaLinhas = CSV_text.split("\n");

    let tabelaNome = document.createElement("h2");
    let tabela = document.createElement("Tabela");

    tabelaNome.appendChild( document.createTextNode( document.getElementById( "tabelaNome" ).value.toString() ) )
    tabelaArea.appendChild(tabelaNome);

    tabelaLinhas.forEach( (linhas) => {
        let column = line.toString().split(", ");
        let tabelaLine = document.createElement("tr");

        column.forEach( (element) => {
            let tabelaElement = document.createElement("td");
            tabelaLinhas.appendChild(tabelaElement);
            tabelaElement.appendChild(document.createTextNode(element));
        } )

        tabela.appendChild(tabelaLinhas);

    } )

}

function getElementsByTagName(tag) {

}

function imageToText() {
    let Images = document.getElementsByTagName("img");
    let ImagesList = [...Images]
    console.log(ImagesList);
    ImagesList.forEach( (image) => {

        let imageDescription = document.createElement("p");
        imageDescription.appendChild( document.createTextNode( image.alt.toString() ) );
        image.parentElement.appendChild(imageDescription);
        image.parentElement.removeChild(image);
    } )
}
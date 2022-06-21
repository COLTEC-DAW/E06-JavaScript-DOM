function HTMLtable() {

    let CSV_text = document.getElementById("CSV_text").value.toString();
    let tableArea = document.getElementById("tableArea");
    let tableLines = CSV_text.split("\n");

    let tableName = document.createElement("h2");
    let table = document.createElement("table");

    tableName.appendChild( document.createTextNode( document.getElementById( "tableName" ).value.toString() ) )
    tableArea.appendChild(tableName);

    tableLines.forEach( (line) => {
        let column = line.toString().split(", ");
        let tableLine = document.createElement("tr");

        column.forEach( (element) => {
            let tableElement = document.createElement("td");
            tableLine.appendChild(tableElement);
            tableElement.appendChild(document.createTextNode(element));
        } )

        table.appendChild(tableLine);

    } )

    tableArea.appendChild(table);
    document.getElementById("tableInfo").style.display = "none";
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
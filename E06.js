function openModal() {
    let modal = document.querySelector(".modal");

    modal.style.display = "block";
}

function closeModal() {
    let modal = document.querySelector(".modal");

    modal.style.display = "none";
}

function createHTMLtable(titleText, csvData) {
    let title = document.getElementById("tableTitle");
    let h1 = document.createElement("h5");
    let text = document.createTextNode(titleText);

    h1.appendChild(text);
    title.appendChild(h1);

    let tableSpace = document.getElementById("tableSpace");
    let table = document.createElement("table");
    let csvTable = csvData.split("\n");

    csvTable.forEach( (line) => {
        let values = line.toString().split(",");
        let tr = document.createElement("tr");

        values.forEach(value => {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(value));
            tr.appendChild(td);
        })

        table.appendChild(tr);
    })

    tableSpace.appendChild(table);
}

function submitFunction() {
    let titleInputValue = document.querySelector("#titleInput").value;
    let csvInputValue = document.querySelector("#csvInput").value;

    createHTMLtable(titleInputValue, csvInputValue);
    closeModal();
}

function getByName(node, elem, arrayAux) {

    for (var i = 0; i < node.childNodes.length; i++) {
        let childNode = node.childNodes[i];

        if(childNode.childNodes.length > 0) { getByName(childNode, elem, arrayAux); } 
        if(childNode.tagName == elem) { arrayAux.push(childNode); }
    }

    return arrayAux;
}

function imgToString(node) {
    let images = document.getElementsByTagName("img");

    images = [].slice.call(images);
    images.forEach(image => { 
        let parent = image.parentElement;
        let alt = document.createElement("p").appendChild(document.createTextNode(image.alt.toString()));

        parent.removeChild(image);
        parent.appendChild(alt);
    });
} 
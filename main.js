function table(){
    
    let csv = document.getElementById("texto").value;
    let mincsv = csv.split("\n");
    
    let table = document.createElement("table");

    for(var c in mincsv){
        let row = document.createElement("tr");
        let arraytexto = mincsv[c].toString().split(",");
        for(var x in arraytexto){
            let cell = document.createElement("td");
            let text = document.createTextNode(arraytexto[x]);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

function getByName(elem){
    let array = [];
    recursiveSearch(document.body, elem.toUpperCase(), array);
    return array;
}

function recursiveSearch(node, tag, arrayElements){
    for (let childOfNode of node.childNodes){
        if (childOfNode.childNodes.length != 0) recursiveSearch(childOfNode, tag, arrayElements);
        if (childOfNode.tagName == tag) arrayElements.push(childOfNode);
    }
    return arrayElements;
}

function moreValuable(){
    let imgs = document.getElementsByTagName("img");
    let i = 0;
    do{
        let span = document.createElement('span');
        let alt = document.createTextNode(imgs[i].alt);
        span.appendChild(alt);
        document.body.replaceChild(span, imgs[i]); continue;
    }while(i < imgs.length);
}

function converter(){
    let table = document.createElement("table");
    let tablePosition = document.getElementById("tablePosition");

    tablePosition.appendChild(table);

    let csv = document.getElementById("csv").value;
    let lines = csv.split("\n");

    for(var i = 0; i < lines.length; i++){
        let row = document.createElement("tr");
        let cells = lines[i].split(",");
        
        for(var j = 0; j < cells.length; j++){
            let col = document.createElement("td");
            row.appendChild(col);

            let value = document.createTextNode(cells[j]);
            col.appendChild(value);
        }
        table.appendChild(row);
    }
}


function search(node, tag, list){
    if(node.tagName == tag){
        list.push(node);
    }
    for(let i = 0; i < node.childNodes.length; i++){
        search(node.childNodes[i], tag, list);
    }
}

function tagByName(){
    let tag = document.getElementById("tag").value;
    let list = [];
    
    search(document, tag, list);
    return list;
}


function replace(){
    let imgs = document.getElementsByTagName("img");

    for(var i = 0; i < imgs.length;){
        let parent = imgs[i].parentElement;
        parent.replaceChild((document.createTextNode(imgs[i].alt)), imgs[i])
    }
}
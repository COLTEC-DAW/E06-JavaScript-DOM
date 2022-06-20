function csvToHtml(){
    let table = document.createElement("table");
    let csv = document.getElementById("csvTable").value;
    let csvArray = csv.split("\n");

    for(var i in csvArray){
        let row = document.createElement("tr");
        let elem = csvArray[i].split(",");
        
        for(var j in elem){
            let data = document.createElement("td");
            let node = document.createTextNode(elem[j]);
            
            data.appendChild(node);
            row.appendChild(data);
        }
        
        table.appendChild(row);
    }
    
    document.body.appendChild(table);
}

function getByName(elem){
    let count = 0;

    for(var i in document.body.childNodes) {
        let childNode = document.body.childNodes[i];

        if(childNode.childNodes.length > 0) getByName(childNode, string);
        if(childNode.tagName == elem) count++;
      }
      
      return count;
}

function imgToDesc(){
    let images = document.getElementsByTagName("img");

    for(var i = 0; i < images.length; i++){
        let desc = document.createElement("p");
        desc.appendChild(document.createTextNode(images[i].alt));
        
        image[i].parentNode.replaceChild(desc, images[i]);
    }
}
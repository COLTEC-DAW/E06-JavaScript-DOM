function convertCSVtoHTML(){

    let title_input = document.getElementById("title-input").value;
    let csv_input = document.getElementById("csv-input").value;

    let title = document.createTextNode(title_input);

    let table_title = document.getElementById("table_title");
    let table_content = document.getElementById("table_content");

    table_title.innerHTML = "";
    table_content.innerHTML="";

    table_title.style.borderTop = " .15rem solid black";
    table_title.style.borderRight = " .15rem solid black";
    table_title.style.borderLeft = " .15rem solid black";
    table_title.style.borderBottom = " .1rem solid black";
    
    table_title.appendChild(title);

    let table = document.createElement("table");
    let tableCSVtoHTML = csv_input.split("\n");

    tableCSVtoHTML.forEach(lines_of_table => {
        
        let line_word = lines_of_table.toString().split(",");
        let line = document.createElement("tr");

        line_word.forEach(words=>{

            let word = document.createElement("td");
            let text = document.createTextNode(words);
            word.appendChild(text);
            line.appendChild(word);
    
        })

        table.appendChild(line);

    });

    table_content.appendChild(table);

}

function img_to_description(){

    let imgs = [].slice.call(document.getElementsByTagName("img"));

    imgs.forEach(img => { 

        let parent_of_img = img.parentElement;
        let description = document.createTextNode(img.alt.toString());
        parent_of_img.removeChild(img);
        parent_of_img.appendChild(description);

    });
}

function callGetByName(){

    let tag = document.getElementById("inputTag").value;
    getByName(document.body, tag);
}

function getByName(node, elem){
    
    let array_elements_tag_name = [];

    for(let i = 0; i < node.childNodes.length; i++){

        let childNode = node.childNodes[i];

        if(childNode.childNodes.length > 0){

            getByName(childNode, elem);
        }
        if(childNode.tagName == elem){

            array_elements_tag_name.push(childNode);

        }

    }

    console.log(array_elements_tag_name);
    return array_elements_tag_name;
}


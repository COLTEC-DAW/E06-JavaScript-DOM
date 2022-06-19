function convertCSVtoHTML(){

    let title_input = document.getElementById("title-input").value;
    let csv_input = document.getElementById("csv-input").value;

    let title = document.createTextNode(title_input);

    let table_title = document.getElementById("table_title");
    let table_content = document.getElementById("table_content");

    table_title.innerHTML = "";
    table_content.innerHTML="";

    table_title.style.border = " .15rem solid black";
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
function ex1(){
    let body = document.body;

    let csv = document.getElementById('csvFiletxt').value;
    console.log(csv);

    let csvLines = csv.split(/\r?\n/);
    console.log(csvLines);

    //criando tabela e atributos
    let table = document.createElement('table');
    let tableAttr = document.createAttribute('border');
    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');

    //adicionando cabeçalho e estilo
    tableAttr.value = 2;
    table.setAttributeNode(tableAttr);
    table.appendChild(tableHead);
    table.appendChild(tableBody);

    //adicionando tabela toda
    body.appendChild(table);

    //adicionando elementos na tabela
    for(i = 0; i < csvLines.length; i++){
        let row = document.createElement('tr');
        let csvCollumns = csvLines[i].split(",");
        for(j = 0; j < csvCollumns.length; j++){
            let heading = document.createElement('th');
            heading.innerHTML = csvCollumns[j];
            row.appendChild(heading);
        }
        //verificação simples de se deve ser colocado no head ou no body
        if(!i){
            tableHead.appendChild(row);
        }
        else{
            tableBody.appendChild(row);
        }
    }
}
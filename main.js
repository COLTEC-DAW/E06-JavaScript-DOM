let body = document.body;

//var csvForm = document.body.getElementsByClassName("csvFile");

//var arrayDeAlgo = Array.from(document.querySelector('#csvFile').value);

/*console.log(document.querySelector('#csvFile').value);
console.log("222");*/

/*let csv = document.getElementById('csvFile').value;
console.log(csv);*/

let csv = document.getElementById('csvFiletxt').value;
console.log(csv);

let csvLines = csv.split(/\r?\n/);
console.log(csvLines);

//criando tabela e atributos
let table = document.createElement('table');
let tableAttr = document.createAttribute('border');
let tableHead = document.createElement('thead');

//adicionando cabeçalho e estilo
tableAttr.value = 2;
table.setAttributeNode(tableAttr);
table.appendChild(tableHead);

//adicionando tabela toda
body.appendChild(table);

//adicionando elementos na tabela
let row1 = document.createElement('tr');
for(i = 0, j = 0; i < csvLines[0].length; i++, j++){
    let rowData
    let heading = document.createElement('th');
    heading.innerHTML = csvLines[i][j];
}

/*joao, jlkdsjalfk, klsadjflkajs
aklsdfj, cpovizx, qwembwer*/
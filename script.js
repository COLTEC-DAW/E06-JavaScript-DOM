var element = document.createElement('table');

var carro = {
    prop: "matue",
    marca: "porsche",
    ano: 2020
 };

let table = document.createElement('table');

ADC_ColTable(carro, table)
{
    let tr1 = document.createElement('tr');

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.inneHTML = carro.prop;
    td2.innerHTML = carro.marca;
    td3.innerHTML = carroo.ano;

    table.appendChild(tr);

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
}

ADC_ColTable(carro, table);
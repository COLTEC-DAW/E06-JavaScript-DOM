var input = document.URL;
var input_text = input.split("?texto=");
var body = document.getElementsByTagName("body")[0];

var o_que_eu_quero = input_text[1];
var separa_virgula = o_que_eu_quero.split("%2C");

var tabela = document.createElement("table");

tabela.setAttribute("border","1px");

var tabelaRow = document.createElement("tr");

tabela.appendChild(tabelaRow);

for(var i=0;i<separa_virgula.length;i++){
    var text_aux = document.createTextNode(separa_virgula[i]);
    var child = document.createElement("td");
    child.appendChild(text_aux);
    tabelaRow.appendChild(child);
}

body.appendChild(document.createElement("br"))

body.appendChild(tabela);
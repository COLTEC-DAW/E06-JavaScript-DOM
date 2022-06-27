function transforma(texto){
    var vetorTexto=[];
    var lines = texto.split('\n');
    for(i=0; i < lines.length; i++){
        vetorTexto[i] = lines[i].split(',');
    }
    return vetorTexto;
}

function submeter(){
    var tbl = document.getElementsByTagName("table")[0];
    var text = document.getElementsByTagName("textarea")[0].value;
    var Tabela = transforma(text);
    while(tbl.childNodes.length>0){
        tbl.removeChild(tbl.childNodes[0]);
    }
    for(i = 0; i < Tabela.length;i++){
       var li = document.createElement("tr");
       for( w = 0; w < Tabela[i].length; w++){
        var colunas = document.createElement("td");
        var value = document.createTextNode(Tabela[i][w]);
        colunas.appendChild(value);
        li.appendChild(colunas);
       }
       tbl.appendChild(li);

    }
}

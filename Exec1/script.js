function transforma(){
    var texto = document.getElementById("text").value;
    var conteudo = [];
    var tabela = document.getElementById("table");

    tabela.innerHTML = ""; //limpando a tabela

    texto=texto.split('\n'); // divide linhas



    for(var i=0; i<texto.length; i++){
        conteudo[i]= texto[i].split(','); // cada parte de uma linha vira um conteudo
    }



    for(var i=0; i<conteudo.length; i++){

        var linha = document.createElement("tr"); //criando as linhas da tabela

        for(var j=0; j<conteudo[i].length; j++){ //navegando em cada posição da linha atual

            var result = document.createElement("td"); //criando cada parte

            node = document.createTextNode(conteudo[i][j]);
            result.appendChild(node);
            linha.appendChild(result);

        }

        var tabela = document.getElementById("table"); //plotando tabela
        tabela.appendChild(linha);
    }
}
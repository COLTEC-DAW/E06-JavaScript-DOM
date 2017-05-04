function tranformar(){
    var txt = document.getElementsByTagName("textarea")[0].value;   //pega o texto da textarea
    var tabela = document.getElementsByTagName("table")[0];         //pega a tabela
    var texto = txt.split('\n');  //coloca todo o conteudo da textarea e manda para uma string, separando por virgula linhas diferentes
    var vet = [];                 //vetor no qual cada posição representa o conteudo de uma linha
    for(var i=0;i<texto.length;i++){
        vet[i] = texto[i].split(',');   //coloca o texto até a virgula em uma posição do vetor e retira essa virgula
    }
    //criar a tabela
    for(var i=0;i<vet.length;i++){  //navega por todo o vetor de texto
        var element_linha = document.createElement("tr");     //cada linha da tabela é definida pela tag <tr>
        for(var j=0;j<vet.length[i];j++){   //navega dentro das posições
            var element_celula = document.createElement("td");  //cada celula da tabela é definida pela tag <td>
            var node = document.createTextNode(vet[i][j]); //conteudo da celula
            element_celula.appendChild(node);
            element_linha.appendChild(element_celula);
        }
        //colocar na página
        var element = document.getElementById("tabelas");
        element.appendChild(element_linha);    
    }
}
function transformaImg(){
    //Remover as imagens
    var pai = document.getElementById("div1");
    var filho = document.getElementsByTagName("img");
    while(filho.length > 0){
        console.log(filho.length);
        pai.removeChild(filho[0]);
    }
 
   //descrição da imagem 1
   var QuebraLinha = document.createElement("br");
   var criaElem = document.createElement("p");
   var node = document.createTextNode("Bozo");
   criaElem.appendChild(node);
   criaElem.appendChild(QuebraLinha);
   var elem = document.getElementsByTagName("div");
   elem[0].appendChild(criaElem);
 
   //descrição da imagem 2
   QuebraLinha = document.createElement("br");
   criaElem = document.createElement("p");
   node = document.createTextNode("lula");
   criaElem.appendChild(node);
   criaElem.appendChild(QuebraLinha);
   elem = document.getElementsByTagName("div");
   elem[0].appendChild(criaElem);
}

function transformaTexto(texto){
    var vetorTexto=[];
    var lines = texto.split('\n');
    for(i=0; i < lines.length; i++){
        vetorTexto[i] = lines[i].split(',');
    }
    return vetorTexto;
}

function resultado(){
    var tbl = document.getElementsByTagName("table")[0];
    var text = document.getElementsByTagName("textarea")[0].value;
    var Tabela = transformaTexto(text);
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

function getByName(elem)
{
    var array = []
    busca(document.body, elem.toUpperCase(), array)
    return array
}

function busca(node, tag, arrayElements)
{
    for (var filho of node.childNodes)
    {
        if (filho.childNodes.length != 0) 
        {
            busca(filho, tag, arrayElements)
        }
            if (filho.tagName == tag) 
        {
            arrayElements.push(filho)
        }
    }
    return arrayElements
}
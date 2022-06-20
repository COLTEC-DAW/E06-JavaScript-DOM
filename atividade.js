function fazTabela(){
    let texto = document.getElementById("entrada").value;
    let arrayValores = texto.split("\n")
    let tabela = `<table>`;
    arrayValores.forEach((row, index) =>{
        tabela += `<tr>`
        let rowValues = row.split(",");
        if (index == 0){
            rowValues.forEach((value) =>{
                tabela += `<td>${value}</td>`
            });
            tabela += `</tr>`
        }
        else{
            rowValues.forEach((value) =>{
                tabela += `<td>${value}</td>`
            });
            tabela += `</tr>`
        }
    })
    tabela += `</tr></table>`
    document.body.innerHTML += tabela;
    console.log(tabela)
}
// getByName(elem)
function getElementsByTagName(tag){
    let elementsWithTag = [];
    recursiveSearch(document.body, tag, elementsWithTag);
    return elementsWithTag;
}
function recursiveSearch(node, tag, arrayElements){
    if (node.childNodes.length != 0){
        node.childNodes.forEach((childNode) =>{
            if (childNode.tagName != undefined) recursiveSearch(childNode, tag, arrayElements);
        })
    }
    if (node.tagName == tag){
        arrayElements.push(node);
    }
}
//Um texto vale mais que mil imagens
function replaceImageWithText(){
    let imagens = getElementsByTagName("IMG");  
    for (let i = 0; i < imagens.length; i++) {
        let parentNode = imagens[i].parentNode;
        let span = document.createElement('span');
        span.appendChild(document.createTextNode(imagens[i].alt));
        parentNode.replaceChild(span, imagens[i]);
    }
}
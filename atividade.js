function fazTabela(){
    let texto = document.getElementById("entrada").value;
    let arrayValores = texto.split(",")
    let tabela = `<table>`;
    arrayValores.forEach((value) =>{
        tabela += `<tr><td>${value}</td></tr>`;
    })
    tabela += `</table>`
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
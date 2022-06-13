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
function tabelaHTML(){

  let tabela_csv = document.getElementById("input").value;
  let tabela_pronta = document.getElementById("tabela_pronta");

  tabela_pronta.innerHTML = "";

  let tabela = document.createElement("table");
  let tabelaHTML = tabela_csv.split("\n");

  tabelaHTML.forEach(linha_tabela => {
    
    let item = linha_tabela.toString().split(",");
    let linha = document.createElement("tr");

    item.forEach(palavra => {

      let texto = document.createElement("td");
      let noTexto = document.createTextNode(palavra);
      
      texto.appendChild(noTexto);
      linha.appendChild(texto);

    })

    tabela.appendChild(linha);

  });

  tabela_pronta.appendChild(tabela);
  
}
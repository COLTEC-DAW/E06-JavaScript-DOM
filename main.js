function convertToTable() {
    // Obter o texto do CSV a partir do campo de texto
    const csvText = document.getElementById("csv-text").value;
  
    // Analisar o CSV para obter uma matriz de dados
    const data = Papa.parse(csvText).data;
  
    // Criar a tabela HTML
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
  
    // Adicionar as linhas da tabela
    for (let i = 0; i < data.length; i++) {
      const row = document.createElement("tr");
  
      for (let j = 0; j < data[i].length; j++) {
        const cell = document.createElement("td");
        cell.textContent = data[i][j];
        row.appendChild(cell);
      }
  
      tbody.appendChild(row);
    }
  
    // Adicionar a tabela ao contêiner
    table.appendChild(tbody);
    document.getElementById("table-container").appendChild(table);
  }
  
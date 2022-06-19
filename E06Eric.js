function geraTabelaHTML() {
    
    let tabela = document.getElementById("Tabela")
    let textoCsvDesformatado = document.getElementById("FormularioRecebeCSV").value
    let textoCsvDesformatadoString = textoCsvDesformatado.toString()
    let csvDivididoEmLinhas = textoCsvDesformatadoString.split("\n")
    let linhaInicial = csvDivididoEmLinhas[0].split(",")
    let todosElementosString = csvDivididoEmLinhas.toString()
    let todosElementosSeparados = todosElementosString.split(",")
    let numeroTotalElementos = todosElementosSeparados.length
    let numeroDeColunas = linhaInicial.length
    let numerodeLinhas = numeroTotalElementos / numeroDeColunas
    let indiceTableRow = 0
    function geraTrs() {
        for (let i = 1; i < numerodeLinhas; i++) {
            let tabelasSecas = document.createElement("tr")
            tabela.append(tabelasSecas)
        }
    }
    function geraTabela() {
        for (i = 0; i <= numeroTotalElementos; i++) {
            if (i % numeroDeColunas == 0 && i != 0) {
                indiceTableRow++
            }
            let tableRowAtual = tabela.getElementsByTagName("tr")[indiceTableRow]
            let textNodeAtual = document.createTextNode(todosElementosSeparados[i])
            let tableDataAtual = document.createElement("td")
            tableDataAtual.append(textNodeAtual)
            tableRowAtual.append(tableDataAtual)
        }
    }
    geraTrs()
    geraTabela()
}

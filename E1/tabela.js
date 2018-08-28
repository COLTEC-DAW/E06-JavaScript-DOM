function gerarTabela() {
    // Pegar o texto da tabel
    var csv = document.getElementById("CSV").value;
    // Separa o texto em cada linha
    var linhas = csv.split('\n');
    // Criar uma tabela Html
    var tabela = document.createElement("tabela");
        //Percorrer toda as linhas
        for (var i=0; i<linhas.length; ++i){
            //Criar cada linha
            var cadaLinha = document.createElement("TR");
            // Separar as colunas
            var colunas = linhas[i].split(',');
            //Percorrer cada coluna
            for (var j=0; j<colunas.length; ++j){
                // Criar as colunas
                var c = document.createElement("TD");
                var text = document.createTextNode(colunas[j]);
                //Ligar os nos
                c.appendChild(text);
                cadaLinha.appendChild(c);
            }
            tabela.appendChild(cadaLinha);
        }
    document.body.appendChild(tabela);
}
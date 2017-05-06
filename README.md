**OBS: É importante que você gere um commit para cada parte da atividade que você concluir.**

*Nota: Exercícios retirados/inspirados do livro Eloquent JavaScript, de Marijn Haverbeke.*

## JavaScript & DOM

### Lidando com Tabelas

Implemente um programa em JavaScript que converta uma tabela no formato CSV para uma tabela HTML. O usuário poderá passar o csv textualmente através de um campo de texto de um formulário, por exemplo.

#### Respota:
Você pode ver em ação [aqui](https://output.jsbin.com/cukalub)
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <textarea id="tabela" rows="6" cols="70"></textarea>
  <button onclick="toTable()">Gerar</button>
</body>
</html>
```
```css
table {
  border-collapse: collapse;
  border: 2px black solid;
  font: 12px sans-serif;
}
td {
  border: 1px black solid;
  padding: 5px;
}
```
```javascript
function toTable() {
  var _D = document
  var csv = _D.getElementById("tabela").value  
  var linhas = csv.split('\n')
  var table = _D.createElement("TABLE")
  for (var i = 0; i < linhas.length; ++i){
    var row = _D.createElement("TR")
    var colunas = linhas[i].split(',')
    console.log(linhas[i][1])
    for (var j = 0; j < colunas.length; ++j){
      var col = _D.createElement("TD")
      var text = _D.createTextNode(colunas[j])
      col.appendChild(text)
      row.appendChild(col)
    }
    table.appendChild(row)
  }
  _D.body.appendChild(table)
}
```


### getByName(elem)

Implemente sua própria versão da função `getElementsByTagName`. Sua função deverá receber a tag que será buscada como parâmetro e retornar uma lista de elementos que possuem esta tag.

Faça o teste com o código HTML da matéria. Quantos `<section>` existem? Quantos links a apresentação possui? Quantas Imagens?

*Dica: Você deverá navegar manualmente pelo DOM e verificar a propriedade tagName de cada elemento*

#### Resposta
```javascript
var getByName = function(elem){
  var elemArray = []
  var search = function(father){
    if (father.tagName == elem){
      console.log(father)
      elemArray.push(father)
    }
    (father.childNodes).forEach(search)
  }
  search(document)
  console.log(elemArray)
  return (elemArray)
}
```

### Um texto vale mais que mil imagens...

Implemente um código JavaScript que, ao ser executado, substitua toda imagem de uma página HTML por seu respectivo texto de descrição.

function imgToAlt()
{
    var imgs = document.getElementsByTagName("img")
    var i = 0
    do
    {
        var span = document.createElement('span')
        var alt = document.createTextNode(imgs[i].alt)
        span.appendChild(alt)
        document.body.replaceChild(span, imgs[i]); continue
    }while(i < imgs.length)
}

function tabelizador()
{    
    var csv = document.getElementById("texto").value
    var lista_linhas = csv.split("\n")
    
    var table = document.createElement("table")

    for(var l in lista_linhas)
    {
        var row = document.createElement("tr")
        var arraytexto = lista_linhas[l].toString().split(",")
        for(var x in arraytexto)
        {
            var cell = document.createElement("td")
            var text = document.createTextNode(arraytexto[x])
            cell.appendChild(text)
            row.appendChild(cell)
        }

        table.appendChild(row)
    }
    document.body.appendChild(table)
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

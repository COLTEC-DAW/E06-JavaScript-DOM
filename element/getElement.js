function elementTag() {
    var input = document.getElementById("tag").value
    var start = document.documentElement
    var items = busca(start, input.toUpperCase())
    console.log(items)
    console.log("encontrados " + items.length + " na pagina");
}

function busca(start, tag) {
    var result = []
    if (start.tagName == tag) {
        result.push(start)
    }
    start.childNodes.forEach(function(elem) {
        busca(elem, tag).forEach(function(elem) {
            result.push(elem)
        });
    });
    return result
}
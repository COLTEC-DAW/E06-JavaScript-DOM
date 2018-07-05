var openFile = function(event) {
    var input = event.target
    var reader = new FileReader()
    reader.readAsText(input.files[0])
    reader.onload = function() {
        var rows
        var cols
        var table = "<table class='table table-bordered'>"
        rows = reader.result.split('\n')
        rows.forEach(function(item) {
            table += "<tr>"
            cols = item.split(',')
            cols.forEach(function(item) {
                table += "<td>" + item + "</td>"
            })
            table += "</tr>"
        })
        table += "</table>"
        var node = document.getElementById("output")
        node.innerHTML = table
    }
}
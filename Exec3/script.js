function descrever(){

	var box = document.getElementById("transicao");
    var child = document.getElementById("img");
    box.removeChild(child);

    var p = document.createElement("p");
    var texto = document.createTextNode("Descrição");
    p.appendChild(texto);

    box.appendChild(p);

}
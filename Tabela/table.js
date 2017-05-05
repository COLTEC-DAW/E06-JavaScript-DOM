function testa(){
	//alert("Funciona");
	var texto = document.getElementById('texto').value;
	texto = texto.split("\n");

	for(var i = 0; i < texto.length; i++){
		texto[i] = texto[i].split(",");
	}

	var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    x.setAttribute("border", "1");
    document.body.appendChild(x);

	for(var i = 0; i < texto.length; i++){
		var s = "myTr" + i;
		var y = document.createElement("TR");
    	y.setAttribute("id", s);
    	document.getElementById("myTable").appendChild(y);
    	for (var j = 0; j < texto[i].length; j++) {
    		var z = document.createElement("TD");
    		var t = document.createTextNode(texto[i][j]);
    		z.appendChild(t);

    		document.getElementById(s).appendChild(z);
    	}
	}
}
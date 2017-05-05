function trocaImg(){
	for(j = 0; j < document.images.length; j++){
    	var descricoes = document.getElementsByTagName("img");
    	for (var i = 0; i < descricoes.length; i++) {
        	var pai = descricoes[i].parentNode;
        	var text = document.createTextNode(descricoes[i].alt);
        	var p = document.createElement("p");
        	p.appendChild(text);
        	pai.replaceChild(p, descricoes[i]);
    	}
	}
}
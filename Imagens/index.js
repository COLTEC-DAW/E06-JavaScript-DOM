function textoValioso() {
	var imagens = document.getElementsByTagName('img');
	var length = imagens.length; 

	for(var i = 0; i < length; i++) {
		var pai = imagens[0].parentElement;
		var text = imagens[0].alt;
		var textNode = document.createTextNode(text);

		pai.insertBefore(textNode, imagens[0]);
		pai.removeChild(imagens[0]);
	};
}
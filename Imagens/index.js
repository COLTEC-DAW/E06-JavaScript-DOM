function textoValioso() {
	var imagens = document.getElementsByTagName('img');

	for(var i = 0; i < imagens.length; i++) {
		var pai = imagens[i].parentElement;
		var text = imagens[i].textContent;
		var textNode = document.createTextNode(text);

		pai.insertBefore(textNode, imagens[i]);
		pai.removeChild(imagens[i]);
	};
}
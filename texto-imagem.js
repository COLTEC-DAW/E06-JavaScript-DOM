function mostraTexto() 
{
	var images = document.getElementsByTagName('img');
	var length = images.length; 

	for (var i = 0; i < length; i++) 
    {
		var pai = images[0].parentElement;
		var text = images[0].alt;
		var textNode = document.createTextNode(text);

		pai.insertBefore(textNode, imagens[0]);
		pai.removeChild(images[0]);
	}
}
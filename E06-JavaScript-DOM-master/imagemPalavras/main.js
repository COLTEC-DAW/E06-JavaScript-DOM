var clicado = false;
function descricao(){
	clicado = !clicado;

	if(clicado){
		document.getElementById("img1").src = "";
		document.getElementById("des1").innerHTML = "Rio 2016";
		document.getElementById("img2").src = "";
		document.getElementById("des2").innerHTML = "NY 2015";
	}
	else{
		document.getElementById("img1").src = "rioeu.jpg";
		document.getElementById("des1").innerHTML = "";
		document.getElementById("img2").src = "nyeu.jpg";
		document.getElementById("des2").innerHTML = "";

	}
	


}
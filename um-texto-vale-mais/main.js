var estado = false;
function transform(){
	estado = !estado;

	if(estado){
		var images = document.getElementsByTagName('img'); 

		for(var i=0;i<images.length;i++){
			images[i].src="";
		}

		var parag = document.getElementsByTagName('p'); 

		for(var i=0;i<parag.length;i++){
			parag[i].innerHTML = "Você não sabe nem eu.";
		}
	}
	else{
		var images = document.getElementsByTagName('img'); 

		for(var i=0;i<images.length;i++){
			images[i].src="https://media.lolusercontent.com/api/embedly/1/image/resize?url=http%3A%2F%2Fimgur.com%2FXgfTdsZ.png&key=a45e967db0914c7fb472fd4381e6c85b&width=425";
		}

		var parag = document.getElementsByTagName('p'); 

		for(var i=0;i<parag.length;i++){
			parag[i].innerHTML = "";
		}
	}
}
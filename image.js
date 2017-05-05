for(j = 0; j < document.images.length; j++){
	var alts = document.getElementsByTagName("img");
	for (var i = 0; i < alts.length; i++) {
		var parents = alts[i].parentNode;
		var text = document.createTextNode(alts[i].alt);
		var p = document.createElement("p");
		p.appendChild(text);
		parents.replaceChild(p, alts[i]);
	}
}
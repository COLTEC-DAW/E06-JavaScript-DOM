function IMGtoText(node){
    var ibagens = document.getElementsByTagName("img");
    for (i=0; i<ibagens.length; i++){
        var papai = ibagens[i].parentElement;
        var txtzin = document.createTextNode(ibagens[i].alt);
        papai.appendChild(txtzin);
        papai.removeChild(ibagens[i]);
    }
}
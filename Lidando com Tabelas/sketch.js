

function funcao(){
	var texto = document.getElementsByTagName("textarea")[0].value;
    var tabela = document.getElementsByTagName("table")[0];
    var txt = texto.split('\n');
    var vet=[];
    var space=[];


	for(var i = 0; i < txt.length; i++) {
		vet[i] = txt[i].split(',');
	}


    for(var i=0;i<vet.length;i++){
        var element = document.createElement("tr");
        if(txt[i]==","){
            var element2 = document.createElement("th");
            var node = document.createTextNode(vet[i][j]);

            element2.appendChild(node);
            element.appendChild(element2);      
        }
        else{
            for(var j=0;j<vet[i].length;j++){
                    var element2 = document.createElement("td");
                    var node = document.createTextNode(vet[i][j]);

                    element2.appendChild(node);
                    element.appendChild(element2);
            }
        }
        var local = document.getElementById("tabelas");
        local.appendChild(element);    
    }
}
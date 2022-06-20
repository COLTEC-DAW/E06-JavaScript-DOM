function elementoPorID(no, parametro){
    
    let vetor_de_elementos = [], i;
  
    for(i = 0; i < no.childNodes.length; i++){
  
        let noFilho = no.childNodes[i];
  
        if(noFilho.childNodes.length > 0){
  
          elementoPorID(noFilho, parametro);
        }
        
        if(noFilho.tagName == parametro){
  
          vetor_de_elementos.push(noFilho);
  
        }
  
    }

    return vetor_de_elementos;
  }
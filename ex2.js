//Por alguma motivo a função só funciona para o primeiro filho de cada elemento em que entra
function mainEx2(){
    function ex2(element, list){
      var tagName = element.tagName;
      console.log(tagName);
      if(tagName == "DIV"){//em capslock
            console.log("achou");
            list.push(element);
      }
      console.log(element.children.length);
      if(element.children.length > 0){
          for(i = 0; i < element.children.length; i++){
              ex2(element.children[i], list);
          }
      } 
    }
    const elementsList = [];
    
    console.log("vai executar!")
    ex2(document.body, elementsList);
    console.log(elementsList);
}
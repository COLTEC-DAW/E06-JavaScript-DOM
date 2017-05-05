function getByName(node, tag, qt){
    
    var site = node.childNodes;

    for(var i=0; i<site.length; i++){ //percorrendo todo o site

        if(tag == site[i].nodeName){ //se achar tag igual
            qt++;
        }

        if(site[i].childNodes.length > 0){ //se dentro da tag houver mais tags, percorre la dentro
            qt = getByName(site[i], tag, qt); //recursivamente, conta cada vez mais fundo
        }
    }

    return qt;
}

var body = document.getElementsByTagName('body')[0];

console.log(getByName(body, "SECTION", 0)); //84
console.log(getByName(body, "A", 0)); //4
console.log(getByName(body, "IMG", 0)); //6
function ImgTxt(){
  var img = document.body.getElementsByTagName("img")
  for(var i = 0; i < img.length; i++){
    var description = img[i].alt
    document.removeChild(img[i])
    var p = document.createElement("p")
    var node = document.createTextNode(description)
    document.appendChild(node)
  }
}

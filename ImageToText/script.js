$(document).ready(function () {
    $("#btn").click(function (){
        var imgs = $('img')

        for(var i = 0 ; i < imgs.length; i++){
            var parent = imgs[i].parentElement;
            text = imgs[i].alt;
            var textNode = document.createTextNode(text);
            var br = document.createElement("br");
            parent.append(br, imgs[i])
            parent.append(textNode, imgs[i]);

        }
        for(var i = 0 ; i < imgs.length; i++){
            var parent = imgs[i].parentElement;
            parent.removeChild(imgs[i]);


        }
    });
});

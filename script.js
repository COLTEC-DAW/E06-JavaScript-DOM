        var torna;

        torna = function () {
            var imagens = document.getElementsByTagName("IMG");
            var tam = imagens.length;

            for (let i = 0; i < tam; i++) {
                var texto = document.createElement("h5");

                var attr = document.createAttribute("class");
                attr.value = "mx-auto col-12";
                texto.setAttributeNode(attr);

                var altImagem = document.createTextNode(imagens[0].alt);

                texto.appendChild(altImagem);
                imagens[0].parentElement.replaceChild(texto, imagens[0]);
            }
        }

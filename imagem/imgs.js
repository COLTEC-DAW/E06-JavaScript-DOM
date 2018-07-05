function change() {
    var content = ""
    var img = document.getElementsByTagName("img")
    for (var i = 0; i < img.length; i++) {
        content += "<p class='col-1 mt-3'>" + img[i].getAttribute("alt") + "</p>"
        img[i].classList.add("d-none")
    }
    document.getElementById("content").innerHTML = content
}


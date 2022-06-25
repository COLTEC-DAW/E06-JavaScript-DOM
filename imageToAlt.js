function imageToAlt() {
  let imgs = document.querySelectorAll("img");

  for (i = 0; i < imgs.length; i++) {
    imgs[i].parentElement.insertBefore(document.createTextNode(imgs[i].alt), imgs[i]);
    imgs[i].parentElement.removeChild(imgs[i]);
  }
}
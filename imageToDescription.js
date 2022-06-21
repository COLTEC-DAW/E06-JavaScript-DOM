function imageToDescription() {
    let images = [].slice.call(document.getElementsByTagName("img"));

    images.forEach(image => {
        image.parentElement.insertBefore(document.createTextNode(image.alt), image);
        image.parentElement.removeChild(image);
    });
}

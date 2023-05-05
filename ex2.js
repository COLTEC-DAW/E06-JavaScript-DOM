function getElementsByTagName(tag) {
    const elements = document.getElementsByTagName("*");
    const filteredElements = [];
  
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].tagName === tag.toUpperCase()) {
        filteredElements.push(elements[i]);
      }
    }
  
    return filteredElements;
  }
  
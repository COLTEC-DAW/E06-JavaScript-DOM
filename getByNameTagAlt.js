//Por alguma motivo a função só funciona para o primeiro filho de cada elemento em que entra
function getByNameTagAlt() {
  function searchAndLoad(node, searchTag, list) {
    if (!node.hasChildNodes) return;
    if (node.tagName === searchTag) list.push(node);
    for (i = 0; i < node.childNodes.length; i++) {
      searchAndLoad(node.childNodes[i], searchTag, list);
    }
  }

  const nodesList = [];

  console.log("vai executar!");
  searchAndLoad(document.body, "ElementTag", nodesList);
  console.log(nodesList);

  return nodesList;
}
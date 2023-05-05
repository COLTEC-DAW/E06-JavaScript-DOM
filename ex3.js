// Seleciona todos os elementos <img> da página
const images = document.getElementsByTagName("img");

// Itera sobre todas as imagens
for (let i = 0; i < images.length; i++) {
  // Cria um novo elemento <span> contendo o texto de descrição da imagem
  const altText = images[i].getAttribute("alt");
  const span = document.createElement("span");
  span.textContent = altText;

  // Substitui a imagem pelo novo elemento <span>
  images[i].parentNode.replaceChild(span, images[i]);
}

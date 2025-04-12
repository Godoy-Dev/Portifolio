// src/script.js

// Função para rolar suavemente para o topo
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Função para exibir um alerta ao clicar em um botão
export function showAlert(message) {
  alert(message);
}

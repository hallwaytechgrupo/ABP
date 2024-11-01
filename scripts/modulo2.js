let currentCardIndex = 0;
const cards = document.querySelectorAll('.card');

// Exibe o card atual com transição suave
function showCard(index) {
  cards.forEach((card, i) => {
    card.style.display = 'none'; // Esconde todos os cards inicialmente
    card.style.transition = 'transform 0.5s ease'; // Adiciona transição suave
  });

  if (cards[index]) {
    cards[index].style.display = 'block'; // Mostra o card atual
    cards[index].style.transform = 'translateX(0)'; // Garante que o card esteja visível

    // Se o índice do novo card é maior, move-o da direita; se for menor, da esquerda
    cards[index].style.transform =
      index > currentCardIndex ? 'translateX(100%)' : 'translateX(-100%)';

    setTimeout(() => {
      // Aplica uma transição suave para centralizar o card
      cards[index].style.transform = 'translateX(0)';
    }, 10); // Pequeno delay para garantir a animação

    currentCardIndex = index; // Atualiza o índice atual
  }
}

function showPreviousCard() {
  if (currentCardIndex > 0) {
    const newIndex = currentCardIndex - 1;
    showCard(newIndex);
  }
}

function showNextCard() {
  if (currentCardIndex < cards.length - 1) {
    const newIndex = currentCardIndex + 1;
    showCard(newIndex);
  }
}

// Inicializa o primeiro card como visível
document.addEventListener('DOMContentLoaded', () => {
  showCard(0);
});

export function getQuestoesByModulo(modulo, idquestao = null) {
  const questoes = JSON.parse(localStorage.getItem(`modulo-${modulo}`)) || [];
  if (idquestao) {
    // se a questão existir, retorne a questão aqui
  }
  return questoes;
}

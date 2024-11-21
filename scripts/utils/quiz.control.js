 function getQuestoesByModulo(modulo, idquestao = null) {
  const questoes = JSON.parse(localStorage.getItem(`modulo-${modulo}`)) || [];
  if (idquestao) {
    for (let i = 0; i < questoes.length; i++) {
      if (questoes[i].idquestao === idquestao) {
        return questoes[i];
      }
    }
    console.error(`Questão com id ${idquestao} não encontrada no módulo ${modulo}`);
    return null;
  }
  return questoes;
}
export default { getQuestoesByModulo };


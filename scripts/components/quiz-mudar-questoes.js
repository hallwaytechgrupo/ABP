import { getQuestoesByModulo } from '../services/quiz.service.js';

export function prepararQuiz(modulo) {
  const questao1Input = document.getElementById('question1');
  const questao2Input = document.getElementById('question2');
  const questao3Input = document.getElementById('question3');

  const questoes = getQuestoesByModulo(modulo);

  if (questoes.length < 3) {
    console.error(`Não há questões suficientes para o módulo ${modulo}`);
    return;
  }

  const [questao1, questao2, questao3] = questoes;
  questao1Input.textContent = questao1.enunciado;
  questao2Input.textContent = questao2.enunciado;
  questao3Input.textContent = questao3.enunciado;
}

export default prepararQuiz;

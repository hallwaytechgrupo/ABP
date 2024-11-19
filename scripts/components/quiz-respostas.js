import { createTentativa } from '../services/quiz.service.js';
import toast from '../toast.js';
import { setStepStatus } from '../utils/profile.control.js';

const getQuizRespostas = async (moduleNumber) => {
  document
    .getElementById('quiz-form')
    .addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const answers = {
        question1: formData.get('question1'),
        question2: formData.get('question2'),
        question3: formData.get('question3'),
      };

      // Faça a tarefa da validação do quiz aqui
      const condicao =
        !answers.question1 || !answers.question2 || !answers.question3;

      if (condicao) {
        toast({
          title: 'Erro',
          message: 'Por favor, responda todas as questões!',
          type: 'error',
          duration: 5000,
        });
        return;
      }

      console.log('Respostas:', answers);

      const infoDiv = document.querySelector('.info');
      infoDiv.style.display = 'block';
      infoDiv.innerHTML = `
          <p>Respostas:</p>
          <p>Questão 1: ${answers.question1}</p>
          <p>Questão 2: ${answers.question2}</p>
          <p>Questão 3: ${answers.question3}</p>
    `;

      if (answers) {
        console.log('Quiz completado!', moduleNumber);
        const numberInt = Number.parseInt(moduleNumber, 10) || 1;

        const respostas = [
          {
            idquestao: 1 * numberInt,
            resposta: answers.question1 === 'true',
          },
          {
            idquestao: 2 * numberInt,
            resposta: answers.question2 === 'true',
          },
          {
            idquestao: 3 * numberInt,
            resposta: answers.question3 === 'true',
          },
        ];
      }

      return { completed: true, answers };
    });
};

export default getQuizRespostas;

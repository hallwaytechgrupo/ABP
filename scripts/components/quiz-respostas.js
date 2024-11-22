import toast from '../toast.js';

const getQuizRespostas = async (moduleNumber, callback) => {
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

      if (answers) {
        console.log('Quiz completado!', moduleNumber);

        const baseId = (moduleNumber - 1) * 3;
        const respostas = [
          {
            idquestao: baseId + 1,
            resposta: answers.question1 === 'true',
          },
          {
            idquestao: baseId + 2,
            resposta: answers.question2 === 'true',
          },
          {
            idquestao: baseId + 3,
            resposta: answers.question3 === 'true',
          },
        ];
        callback(moduleNumber, respostas);
      }
    });
};

export default getQuizRespostas;

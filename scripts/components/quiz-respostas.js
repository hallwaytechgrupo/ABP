import toast from '../toast.js';

const getQuizRespostas = async () => {
  document.getElementById('quiz-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const answers = {
      question1: formData.get('question1'),
      question2: formData.get('question2'),
      question3: formData.get('question3'),
    };

    // Faça a tarefa da validação do quiz aqui
    const condicao = !answers.question1 || !answers.question2 || !answers.question3;

    if (condicao) {
      toast({
        title: 'ERRO:400',
        message: 'VOCÊ PRECISA RESPONDER TODAS AS QUESTÕES PARA PROSSEGUIR',
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

    return answers;
  });
};

export default getQuizRespostas;

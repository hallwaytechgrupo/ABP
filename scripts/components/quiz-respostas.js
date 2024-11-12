const getQuizRespostas = async () => {
  document.getElementById('quiz-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const answers = {
      question1: formData.get('question1'),
      question2: formData.get('question2'),
      question3: formData.get('question3'),
    };

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

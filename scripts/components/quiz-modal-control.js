const modalQuizControl = (moduleNumber) => {
  const btnAbrirModal = document.getElementById('start-quiz');
  const modal = document.querySelector('.modal-quiz');
  let status = 'closed';
  console.log('modal', btnAbrirModal);
  btnAbrirModal.addEventListener('click', () => {
    modal.style.display = 'block';
    status = 'open';
    if (moduleNumber === 'quiz2.html') {
      document.querySelector('.container2').style.filter = 'blur(10px)';
    } else {
      document.querySelector('.container').style.filter = 'blur(10px)';
    }
  });

  function fecharModal() {
    modal.style.display = 'none';
  }

  document.addEventListener('click', (event) => {
    if (
      status === 'open' &&
      !event.target.closest('.modal-quiz') &&
      !event.target.closest('#start-quiz')
    ) {
      status = 'closed';
      if (moduleNumber === '2') {
        document.querySelector('.container2').style.filter = 'none';
      } else {
        document.querySelector('.container').style.filter = 'none';
      }
      fecharModal();
    }
  });
};

export default modalQuizControl;

function importarComponente(componentPath, elementId, callback) {
  fetch(componentPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => console.error('Erro ao carregar o componente:', error));
}

importarComponente('components/header.html', 'componente-header');

if (document.getElementById('componente-cta-quiz')) {
  importarComponente('components/cta.html', 'componente-cta-quiz');

  console.log("oi")
  const scriptElement = document.currentScript;
  const moduleNumber = scriptElement.getAttribute('data-module');


  importarComponente(`components/${moduleNumber}`, 'componente-quiz', () => {
    const btnAbrirModal = document.getElementById('start-quiz');
    const modal = document.querySelector('.modal-quiz');
    let status = 'closed';
  
    btnAbrirModal.addEventListener('click', () => {
      modal.style.display = 'block';
      status = 'open';
      document.querySelector('.container').style.filter = 'blur(10px)';
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
        document.querySelector('.container').style.filter = 'none';
        fecharModal();
      }
    });

    document.getElementById('quiz-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(event.target);
      const answers = {
          question1: formData.get('question1'),
          question2: formData.get('question2'),
          question3: formData.get('question3')
      };
  
      console.log('Respostas:', answers);
  
      // Aqui você pode adicionar a lógica para processar as respostas
  });
  
  });

  
}




importarComponente('components/footer.html', 'componente-footer');
importarComponente('components/login.html', 'componente-login', () => {
  const btnAbrirModal = document.getElementById('loginRegistrar');
  const modal = document.querySelector('.modal');
  let status = 'closed';

  btnAbrirModal.addEventListener('click', () => {
    modal.style.display = 'block';
    status = 'open';
  });

  function fecharModal() {
    modal.style.display = 'none';
  }

  document.addEventListener('click', (event) => {
    if (
      status === 'open' &&
      !event.target.closest('.modal') &&
      !event.target.closest('#loginRegistrar')
    ) {
      status = 'closed';
      fecharModal();
    }
  });

  const cadastro = document.getElementById('cadastro-tab');
  const login = document.getElementById('login-tab');

  cadastro.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('cadastro-tab-content').style.display = 'block';
    document.getElementById('login-tab-content').style.display = 'none';
    login.classList.remove('active');
    cadastro.classList.add('active');
  });

  login.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('cadastro-tab-content').style.display = 'none';
    document.getElementById('login-tab-content').style.display = 'block';
    cadastro.classList.remove('active');
    login.classList.add('active');
  });
});

function importarComponente(componentPath, elementId, callback) {
  fetch(componentPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => console.error('Erro ao carregar o componente:', error));
}

importarComponente('components/header.html', 'componente-header', () => {
  document.getElementById('menu-mobile').addEventListener('click', () => {
    console.log('cliquei!');
    const sidebar = document.getElementById('menu-mobile-sidebar');
    if (sidebar.classList.contains('hidden')) {
      sidebar.classList.remove('hidden');
      sidebar.classList.add('show');
      sidebar.style.animation = 'slideIn 0.3s forwards';
    } else {
      sidebar.style.animation = 'slideOut 0.3s forwards';
      setTimeout(() => {
        sidebar.classList.remove('show');
        sidebar.classList.add('hidden');
      }, 300);
    }
  });

  document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('menu-mobile-sidebar');
    const menuButton = document.getElementById('menu-mobile');
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      sidebar.style.animation = 'slideOut 0.3s forwards';
      setTimeout(() => {
        sidebar.classList.remove('show');
        sidebar.classList.add('hidden');
      }, 300);
    }
  });

  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes slideIn {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes slideOut {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }

    #menu-mobile-sidebar.show {
      display: block;
    }

    #menu-mobile-sidebar.hidden {
      display: none;
    }
  `;
  document.head.appendChild(style);
});

if (document.getElementById('componente-cta-quiz')) {
  importarComponente('components/cta.html', 'componente-cta-quiz');

  console.log('oi');
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

    document.getElementById('quiz-form').addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const answers = {
        question1: formData.get('question1'),
        question2: formData.get('question2'),
        question3: formData.get('question3'),
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

// INÍCIO DO SCRIPT USADO NO FOOTER

function sobreFunction() {
  const sobreP = document.getElementById('sobreP');
  const suporteP = document.getElementById('suporteP');
  const localizacaoP = document.getElementById('localizacaoP');
  const footerMeta = document.getElementById('footerMeta');

  if (sobreP.style.display === 'none' || !sobreP.style.display) {
    sobreP.style.display = 'block';
    suporteP.style.display = 'none';
    localizacaoP.style.display = 'none';
    footerMeta.style.paddingTop = '2%';
  } else {
    sobreP.style.display = 'none';
    footerMeta.style.paddingTop = '5%';
  }
}

function suporteFunction() {
  const suporteP = document.getElementById('suporteP');
  const sobreP = document.getElementById('sobreP');
  const localizacaoP = document.getElementById('localizacaoP');
  const footerMeta = document.getElementById('footerMeta');

  if (suporteP.style.display === 'none' || !suporteP.style.display) {
    suporteP.style.display = 'block';
    sobreP.style.display = 'none';
    localizacaoP.style.display = 'none';
    footerMeta.style.paddingTop = '2%';
  } else {
    suporteP.style.display = 'none';
    footerMeta.style.paddingTop = '5%';
  }
}

function localizacaoFunction() {
  const localizacaoP = document.getElementById('localizacaoP');
  const sobreP = document.getElementById('sobreP');
  const suporteP = document.getElementById('suporteP');
  const footerMeta = document.getElementById('footerMeta');

  if (localizacaoP.style.display === 'none' || !localizacaoP.style.display) {
    localizacaoP.style.display = 'block';
    sobreP.style.display = 'none';
    suporteP.style.display = 'none';
    footerMeta.style.paddingTop = '2%';
  } else {
    localizacaoP.style.display = 'none';
    footerMeta.style.paddingTop = '5%';
  }
}

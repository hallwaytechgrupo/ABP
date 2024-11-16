const modalHeaderControl = () => {
  const btnAbrirModal = document.getElementById('loginRegistrar');
  const modal = document.querySelector('.modal');
  let status = 'closed';

  const container =
    document.querySelector('.container2') ||
    document.querySelector('.container');

  const abrirModal = () => {
    container.style.filter = 'blur(5px)';
    modal.style.display = 'block';
    status = 'open';
    const loginEmail = document.getElementById('login-email');
    if (loginEmail) {
      loginEmail.focus();
    }
  };

  btnAbrirModal.addEventListener('click', abrirModal);

  function fecharModal() {
    modal.style.display = 'none';
    container.style.filter = 'none';
  }

  document.addEventListener('click', (event) => {
    if (
      status === 'open' &&
      !event.target.closest('.modal') &&
      !event.target.closest('#loginRegistrar') &&
      !event.target.closest('#fazer-login')
    ) {
      status = 'closed';
      fecharModal();
    }
  });

  const cadastro = document.getElementById('cadastro-tab');
  const login = document.getElementById('login-tab');

  if (!cadastro || !login) return;

  cadastro.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('cadastro-tab-content').style.display = 'block';
    document.getElementById('login-tab-content').style.display = 'none';
    login.classList.remove('active');
    cadastro.classList.add('active');
    document.getElementById('cadastro-nome').focus();
  });

  login.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('cadastro-tab-content').style.display = 'none';
    document.getElementById('login-tab-content').style.display = 'block';
    cadastro.classList.remove('active');
    login.classList.add('active');
    document.getElementById('login-email').focus();
  });
};

export default modalHeaderControl;

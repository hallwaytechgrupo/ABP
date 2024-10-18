fetch('./components/header.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('componente-header').innerHTML = data;
  });

fetch('./components/footer.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('componente-footer').innerHTML = data;
  });

fetch('./components/login.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('componente-login').innerHTML = data;

    const btnAbrirModal = document.getElementById('loginRegistrar');
    const modal = document.querySelector('.modal');
    let status = 'closed';
    btnAbrirModal.addEventListener('click', () => {
      console.log('clicado');
      console.log(modal);
      console.log(modal.style);
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
        console.log('vou fechar');
        status = 'closed';
        fecharModal();
      }
    });

    const cadastro = document.getElementById('cadastro-tab');
    const login = document.getElementById('login-tab');

    console.log('cadastro', cadastro);

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

export function getCadastroData() {
  const name = document.getElementById('cadastro-nome').value;
  const email = document.getElementById('cadastro-email').value;
  const password = document.getElementById('cadastro-senha').value;
  const confirmPassword = document.getElementById(
    'cadastro-repita-senha',
  ).value;

  //Password incorreto

  const clearData = (input1, input2) => {
    input1.value = '';
    input2.value = '';
  };
  document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.querySelector('#cadastro form');

    cadastroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const password = document.querySelector('input[name="password"]');
      const confirmPassword = document.querySelector(
        'input[name="confirmPassword"]',
      );

      if (password.value !== confirmPassword.value) {
        alert('[SENHAS NÃO COINCIDEM]');
        clearData(password, confirmPassword);
      }
    });
  });
  //

  console.log({
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });

  return {
    nome: name,
    email: email,
    senha: password,
    confirmarSenha: confirmPassword,
  };
}

export const cadastro = (nome, email, password) => {
  // Faça a tarefa aqui
};

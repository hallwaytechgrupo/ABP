import {api} from './../apiSetup.js';

export const clearData = (input1, input2) => {
  input1.value = '';
  input2.value = '';
};

export function getCadastroData() {
  const name = document.getElementById('cadastro-nome').value;
  const email = document.getElementById('cadastro-email').value;
  const password = document.getElementById('cadastro-senha').value;
  const confirmPassword = document.getElementById(
    'cadastro-repita-senha',
  ).value;

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




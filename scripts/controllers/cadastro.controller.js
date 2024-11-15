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

export const cadastro = async (nome, email, senha) => {
  const usuario = {
    name: nome,
    mail: email,
    password: senha
  };

  try {
    const response = await api.post('/user/signup', usuario);
    console.log('Cadastro realizado com sucesso:', response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const { message } = error.response.data;
      console.error('Erro de validação:', message);
    } else {
      console.error('Erro ao realizar cadastro:', error);
    }
      throw error;
    }
};


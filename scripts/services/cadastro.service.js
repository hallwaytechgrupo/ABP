import { api } from './../apiSetup.js';

export const cadastro = async (nome, email, senha) => {
  // Crie um objeto com os dados do usuário
  const usuario = {
    nome,
    email,
    senha,
  };
  try {
    const response = await api.post('/user/signup', usuario);

    console.log('[U] Cadastro realizado com sucesso.');
    return { data: response.data, status: response.status };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const { message } = error.response.data;
      console.error('Erro de validação:', message);
    } else if (error.response && error.response.status === 409) {
      const { message } = error.response.data;
      console.error('Erro de conflito:', message);
    } else {
      console.error('Erro ao realizar cadastro:', error);
    }
    throw error;
  }
};

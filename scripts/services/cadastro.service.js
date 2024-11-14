import { api } from './../apiSetup.js';

export const cadastro = async (nome, email, senha) => {
  try {
    const response = await api.post('/user/signup', {
      name: nome,
      mail: email,
      password: senha,
    });
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

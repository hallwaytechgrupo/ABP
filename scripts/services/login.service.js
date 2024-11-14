import { api } from './../apiSetup.js';

export const login = async (email, senha) => {
  console.log('tentando');
  try {
    const response = await api.post('/user/login', {
      mail: email,
      password: senha,
    });

    console.log('Login realizado com sucesso:', response.data);
    console.log('Status code:', response.status);
    return response.data;
  } catch (error) {
    // Tratar erros de validação (status 400)
    if (error.response && error.response.status === 400) {
      const { message } = error.response.data;
      console.error('Erro de validação:', message);
    } else {
      console.error('Erro ao realizar login:', error);
    }
  }
};

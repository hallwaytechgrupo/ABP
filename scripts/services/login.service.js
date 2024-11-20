import { api } from './../apiSetup.js';

export const login = async (email, senha) => {
  const usuario = {
    email: email,
    senha: senha,
  };

  try {
    const response = await api.post('/user/login', usuario);

    console.log('Login realizado com sucesso:', response.data);

    return { data: response.data, status: response.status };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const { message } = error.response.data;
      console.error('Erro de validação:', message);
      return { data: message, status: error.response.status };
    }
    console.error('Erro ao realizar login:', error);
    return error;
  }
};

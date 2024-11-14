import { api } from './../apiSetup.js';

export const cadastro = async (nome, email, senha) => {
  // Crie um objeto com os dados do usuário
  const usuario = {};
  try {
    // Faça uma requisição POST para a rota /user/signup
    const response = await api.post('/user/signup', usuario);

    // Retorne os dados da resposta
    return {};
  } catch (error) {
    console.log(error);
    throw error;
  }
};

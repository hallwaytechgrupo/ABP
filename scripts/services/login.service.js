import { api } from './../apiSetup.js';

export const login = async (email, senha) => {
  const usuario = {};

  try {
    const response = await api.post('/user/login', usuario);

    return {};
  } catch (error) {
    console.log(error);
  }
};

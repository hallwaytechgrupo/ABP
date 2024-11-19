import { api } from './../apiSetup.js';

// Serviço para obter todas as questões
export const getQuestoes = async () => {
  try {
    const response = await api.get('/quiz');
    console.log('Questões obtidas com sucesso:', response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Erro ao obter questões:', error);
    throw error;
  }
};

// Serviço para obter questões por módulo
export const getQuestoesByModulo = async (modulo) => {
  try {
    const response = await api.get(`/quiz/modulo/${modulo}`);
    console.log('Questões por módulo obtidas com sucesso:', response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Erro ao obter questões por módulo:', error);
    throw error;
  }
};

// Serviço para criar uma nova tentativa
export const createTentativa = async (modulo, email, respostas) => {
  const tentativa = {
    modulo,
    email,
    respostas,
  };
  try {
    const response = await api.post('/quiz/tentativas', tentativa);
    console.log('Tentativa criada com sucesso:', response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Erro ao criar tentativa:', error);
    throw error;
  }
};

// Serviço para verificar aprovação
export const verificarAprovacao = async (email, modulo) => {
  const data = {
    email,
    modulo,
  };
  try {
    const response = await api.post('/quiz/verificar-aprovacao', data);
    console.log('Aprovação verificada com sucesso:', response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Erro ao verificar aprovação:', error);
    throw error;
  }
};

// Serviço para obter tentativas por usuário
export const getTentativasByUser = async (email) => {
  const data = {
    email,
  };
  try {
    const response = await api.post('/quiz/tentativas/usuario', data);
    console.log('Tentativas obtidas com sucesso:', response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Erro ao obter tentativas:', error);
    throw error;
  }
};

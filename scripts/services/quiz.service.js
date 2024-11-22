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

export const verificarAprovacaoModulo = async (email, modulo) => {
  const data = {
    email,
    modulo,
  };
  try {
    const response = await api.post('/quiz/verificarAprovacaoModulo', data);
    console.log('Aprovação verificada com sucesso:', response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Erro ao verificar aprovação:', error);
    throw error;
  }
};

// Serviço para verificar progresso em todos os módulos
export const verificarAprovacao = async (email) => {
  const data = {
    email,
  };
  console.log('[S] Verificando progresso para:', email);
  try {
    const response = await api.post('/quiz/verificarAprovacao', data);
    console.log('Progresso verificado com sucesso:', response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error('Erro ao verificar progresso:', error);
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

export async function gerarCertificadoService(email) {
  try {
    const response = await api.post(
      '/quiz/gerarCertificado',
      { email },
      { responseType: 'blob' },
    );
    console.log('Certificado gerado com sucesso:', response);
    return response.data;
  } catch (error) {
    console.error('Erro ao gerar certificado:', error);
    throw error;
  }
}

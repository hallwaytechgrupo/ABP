import { api } from './apiSetup.js';

async function gerarCertificado(email) {
  try {
    const response = await api.post(
      '/quiz/gerarCertificado',
      { email },
      { responseType: 'blob' },
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao gerar certificado:', error);
    throw error;
  }
}
export { gerarCertificado };

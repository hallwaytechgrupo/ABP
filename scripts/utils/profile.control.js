import { gerarCertificado } from '../certificado.js';
import { getUsuario } from './user.utils.js';

function setStepStatus(id, completed) {
  const stepElement = document.getElementById(`step-number-${id}`);
  const statusElement = document.getElementById(`step-number-${id}-status`);

  //   continue...
}

function habilitarGeracaoCertificado() {
  const button = document.getElementById('gerar-certificado');
  const { nome } = getUsuario() || { nome: 'usuário' };

  //   continue...
}

export { setStepStatus, habilitarGeracaoCertificado };

import { gerarCertificado } from '../certificado.js';
import { getUsuario } from './user.utils.js';

export function setStepStatus(id, completed) {
  if (typeof id !== 'number' || id <= 0) {
    return console.error('Invalid ID.');
  }

  if (typeof completed !== 'boolean') {
    return console.error('Invalid completed status.');
  }

  const stepElement = document.getElementById(`step-number-${id}`);
  const statusElement = document.getElementById(`step-number-${id}-status`);

  if (!stepElement || !statusElement)
    return console.error('Element not found.');

  stepElement.classList.toggle('completed', completed);
  statusElement.textContent = completed ? 'check' : 'hourglass_empty';
}

function habilitarGeracaoCertificado() {
  const button = document.getElementById('gerar-certificado');
  const { nome } = getUsuario() || { nome: 'usuário' };

  //   continue...
}

export { setStepStatus, habilitarGeracaoCertificado };

import { getUsuario, usuarioAprovadoEmTodos } from './user.utils.js';

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

export function habilitarGeracaoCertificado(callback) {
  const button = document.getElementById('gerar-certificado');
  const usuarioAprovadoTodos = usuarioAprovadoEmTodos();

  // Desenvolva aqui
  if (button?.hasAttribute('disabled') && usuarioAprovadoTodos) {
    // Você deve adicionar o disabled do botão, e adicionar um listenner
  } else if (!button) {
    console.error('Button with id "gerar-certificado" not found.');
  }
}

export async function gerarCertificado() {
  const email = getUsuario().email;
  try {
    const response = await gerarCertificado(email);
    if (response.status === 200) {
      const pdfBlob = await response.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    } else {
      console.error('Erro ao gerar certificado.');
    }
  } catch (error) {
    console.error('Erro ao gerar certificado:', error);
  }
}

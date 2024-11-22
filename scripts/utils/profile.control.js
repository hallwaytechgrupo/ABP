import { gerarCertificadoFront } from '../certificado.js';
import { gerarCertificadoService } from '../services/quiz.service.js';
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

export function habilitarGeracaoCertificado() {
  const button = document.getElementById('gerar-certificado');
  const usuarioAprovadoTodos = usuarioAprovadoEmTodos();

  if (button?.hasAttribute('disabled') && usuarioAprovadoTodos) {
    button.removeAttribute('disabled');
    button.addEventListener('click', async () => {
      const originalText = button.textContent;
      button.textContent = 'Gerando...';
      button.disabled = true;

      try {
        await gerarCertificado();
      } finally {
        button.textContent = originalText;
        button.disabled = false;
      }
    });
  } else if (!button) {
    console.error('Button with id "gerar-certificado" not found.');
  }
}

export async function gerarCertificado() {
  const nome = getUsuario().nome;
  try {
    if (usuarioAprovadoEmTodos()) {
      await gerarCertificadoFront(nome);
    }
  } catch (error) {
    console.error('Erro ao gerar certificado:', error);
  }
}

import { createTentativa } from '../services/quiz.service.js';
import toast from '../toast.js';
import {
  getUsuario,
  setUsuarioAprovacao,
  usuarioAprovadoEmTodos,
} from '../utils/user.utils.js';
import {
  habilitarGeracaoCertificado,
  setStepStatus,
} from '../utils/profile.control.js';

export const criarTentativa = async (modulo, respostas) => {
  const { data, status } = await createTentativa(
    Number.parseInt(modulo),
    getUsuario().email,
    respostas,
  );

  console.log(status);
  const infoDiv = document.querySelector('.info');

  if (status === 201) {
    const { nota } = data;
    console.log(`Você acertou ${nota} de 3 questões.`);

    infoDiv.style.display = 'block';

    if (nota >= 2) {
      let mensagem =
        nota === 2
          ? 'Você acertou 2 de 3 questões.'
          : 'Você acertou 3 de 3 questões.';

      infoDiv.innerHTML = `<p class="center">Aprovado!</p> 
                          <p class="center">${mensagem}</p>`;

      setStepStatus(Number.parseInt(modulo), true);
      const moduloKey = `modulo-${modulo}`;
      const aprovado = { [moduloKey]: true };
      console.log('aprovado', aprovado);
      setUsuarioAprovacao(aprovado);
      if (usuarioAprovadoEmTodos()) {
        console.log('[U] Aprovado em todos os módulos');
        habilitarGeracaoCertificado();
        mensagem = `${mensagem} e foi aprovado em todos os módulos!
        <br/>Gere seu certificado no perfil.`;
      }
      toast({
        title: 'Aprovado!',
        message: mensagem,
        type: 'success',
        duration: 5000,
      });
    } else {
      toast({
        title: 'Reprovado!',
        message: 'Você acertou menos de 2 questões.',
        type: 'error',
        duration: 5000,
      });

      infoDiv.innerHTML = `
            <p class="center">Reprovado!</p>
            <p class="center">Você acertou ${nota} de 3 questões.</p>
            <p></p>
            `;
    }

    const submitButton = document.querySelector(
      '#quiz-form button[type="submit"]',
    );
    submitButton.disabled = true;
    setTimeout(() => {
      submitButton.disabled = false;
    }, 3000);
  } else {
    toast({
      title: 'Erro',
      message: 'Erro ao enviar quiz. Tente novamente.',
      type: 'error',
      duration: 5000,
    });
  }
};

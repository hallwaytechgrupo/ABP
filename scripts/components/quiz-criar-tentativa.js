import { createTentativa } from '../services/quiz.service.js';
import toast from '../toast.js';
import { getUsuario, setUsuarioAprovacao } from '../utils/user.utils.js';
import { setStepStatus } from '../utils/profile.control.js';

export const criarTentativa = async (modulo, respostas) => {
  console.log('Respostas', respostas);
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
      const mensagem =
        nota === 2
          ? 'Você acertou 2 de 3 questões.'
          : 'Você acertou 3 de 3 questões.';
      toast({
        title: 'Aprovado!',
        message: mensagem,
        type: 'success',
        duration: 5000,
      });
      infoDiv.innerHTML = ` <p>Aprovado!</p> <p>${mensagem}</p> `;

      setStepStatus(Number.parseInt(modulo), true);
      const moduloKey = `modulo-${modulo}`;
      const aprovado = { [moduloKey]: true };
      console.log('aprovado', aprovado);
      setUsuarioAprovacao(aprovado);
      console.log('PORRA!');
    } else {
      toast({
        title: 'Reprovado!',
        message: 'Você acertou menos de 2 questões.',
        type: 'error',
        duration: 5000,
      });

      infoDiv.innerHTML = `
            <p>Reprovado!</p>
            <p>Você acertou ${nota} de 3 questões.</p>
            <p></p>
            `;

      setStepStatus(Number.parseInt(modulo), false);
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

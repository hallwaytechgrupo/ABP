import modalHeaderControl from './components/header-user-form.js';
import setupMobileMenu from './components/header-mobile-menu.js';
import modalQuizControl from './components/quiz-modal-control.js';
import getQuizRespostas from './components/quiz-respostas.js';
import {
  clearData,
  getCadastroData,
} from './controllers/cadastro.controller.js';
import { getLoginData } from './controllers/login.controller.js';
import {
  getUsuario,
  getUsuarioAprovacaoModulo,
  getUsuarioAprovacoes,
  setarLogado,
  usuarioLogado,
} from './utils/user.utils.js';
import { cadastro } from './services/cadastro.service.js';
import { login } from './services/login.service.js';
import toast from './toast.js';
import {
  getQuestoesByModulo,
  verificarAprovacao,
  verificarAprovacaoModulo,
} from './services/quiz.service.js';
import prepararQuiz from './components/quiz-mudar-questoes.js';
import { criarTentativa } from './components/quiz-criar-tentativa.js';
import { setStepStatus } from './utils/profile.control.js';

async function importarComponente(
  componentPath,
  elementId,
  callback,
  retries = 3,
) {
  try {
    const response = await fetch(componentPath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const bodyContent = doc.body.innerHTML;

    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = bodyContent;
      console.log(`Componente ${componentPath} carregado com sucesso`);
      if (callback) {
        console.log(`- callback ${componentPath} chamado`);
        callback();
      }
    } else {
      throw new Error(`Element with id ${elementId} not found`);
    }
  } catch (error) {
    console.error(`Erro ao carregar o ${componentPath}:`, error);
    if (retries > 0) {
      console.log(
        `Tentando recarregar o componente ${componentPath}... (${retries} tentativas restantes)`,
      );
      setTimeout(
        () =>
          importarComponente(componentPath, elementId, callback, retries - 1),
        1000,
      );
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  importarComponente('components/header.html', 'componente-header', () => {
    setupMobileMenu();
  });

  if (document.getElementById('componente-cta-quiz')) {
    if (usuarioLogado()) {
      importarComponente('components/cta.html', 'componente-cta-quiz', () => {
        const scriptElement = document.querySelector(
          'script[type="module"][src="./scripts/auto-import-components.js"]',
        );
        const module = scriptElement.getAttribute('data-module');
        const moduleNumber = scriptElement.getAttribute('data-module-number');

        importarComponente(`components/${module}`, 'componente-quiz', () => {
          try {
            let message;
            if (!localStorage.getItem(`modulo-${moduleNumber}`)) {
              message = ` [Q] Buscando questões do módulo ${moduleNumber}`;
              getQuestoesByModulo(Number.parseInt(moduleNumber)).then(
                (response) => {
                  const questoes = response.data;

                  localStorage.setItem(
                    `modulo-${moduleNumber}`,
                    JSON.stringify(questoes),
                  );
                  console.log(
                    ' [Q] Questões do módulo',
                    moduleNumber,
                    'salvas',
                  );
                },
              );
            } else {
              message = ` [Q] Questões do módulo ${moduleNumber} já foram carregadas`;
            }
            console.log(message);
          } catch (error) {
            console.error(' [Q] Erro ao iniciar o quiz:', error);
          } finally {
            console.log(' [Q] Habilitando botão de início do quiz...');

            const startQuizButton = document.getElementById('start-quiz');
            if (startQuizButton) {
              startQuizButton.disabled = false;
            }

            console.log(' [Q] O quiz está pronto para ser iniciado!');
            modalQuizControl(moduleNumber);
            getQuizRespostas(moduleNumber, criarTentativa);
            prepararQuiz(moduleNumber);
          }
        });
      });
    } else {
      importarComponente(
        'components/cta-feedback.html',
        'componente-cta-quiz',
        () => {
          modalHeaderControl();
        },
      );
    }
  }

  importarComponente('components/footer.html', 'componente-footer');

  if (usuarioLogado()) {
    importarComponente(
      'components/profile.html',
      'componente-login',
      async () => {
        for (let i = 1; i <= 3; i++) {
          const aprovado = getUsuarioAprovacaoModulo(i);
          setStepStatus(i, aprovado);
        }

        modalHeaderControl(false);

        const loginRegistrar = document.getElementById('loginRegistrar');
        if (loginRegistrar) {
          const button = loginRegistrar.querySelector('button');
          if (button) {
            const userNameSpan = document.createElement('span');
            userNameSpan.id = 'username';
            userNameSpan.textContent = 'Meu perfil';
            userNameSpan.classList.add('truncate-text');
            button.appendChild(userNameSpan);
          }
        }

        const primeiroAcesso = localStorage.getItem('primeiroAcesso');
        const primeiroAcessoBoolean = primeiroAcesso === 'true';
        if (primeiroAcessoBoolean) {
          console.log('[U] Primeiro acesso do usuário');
          for (let i = 1; i <= 3; i++) {
            getQuestoesByModulo(i).then((response) => {
              const questoes = response.data;

              localStorage.setItem(`modulo-${i}`, JSON.stringify(questoes));
              localStorage.setItem('primeiroAcesso', false);
            });
          }
        }

        console.log('[U] Usuário logado ou acabou de logar');
        const acabouDeCadastar =
          localStorage.getItem('cadastradoAgora') === 'true';

        const acabouDeLogar = localStorage.getItem('logadoAgora') === 'true';

        if (acabouDeCadastar || acabouDeLogar) {
          const message = acabouDeCadastar
            ? 'Cadastrado com sucesso!'
            : 'Logado com sucesso!';
          toast({
            title: 'Sucesso',
            message: message,
            type: 'success',
            duration: 5000,
          });

          localStorage.removeItem('cadastradoAgora');
          localStorage.removeItem('logadoAgora');
        }

        const logoutButton = document.getElementById('profile-logout');
        if (logoutButton) {
          logoutButton.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem('usuario');
            localStorage.removeItem('primeiroAcesso');
            setarLogado(false);
            window.location.reload();
          });
        }
      },
    );
  } else {
    importarComponente('components/login.html', 'componente-login', () => {
      modalHeaderControl();
      const registrationForm = document.getElementById('cadastro');
      const loginForm = document.getElementById('login');

      registrationForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const { nome, email, senha, confirmarSenha } = getCadastroData();

        if (!nome || !email || !senha || !confirmarSenha) {
          toast({
            title: 'Erro',
            message: 'Todos os campos precisam estar preenchidos!',
            type: 'error',
            duration: 5000,
          });
          return;
        }

        if (senha !== confirmarSenha) {
          toast({
            title: 'Erro',
            message: 'As senhas não coincidem!',
            type: 'error',
            duration: 5000,
          });

          clearData(
            document.getElementById('cadastro-senha'),
            document.getElementById('cadastro-repita-senha'),
          );
          document.getElementById('cadastro-senha').focus();
        } else {
          try {
            const retorno = await cadastro(nome, email, senha);

            if (retorno.status === 201) {
              const { id, nome, email } = retorno.data;
              localStorage.setItem('cadastradoAgora', 'true');

              if (!localStorage.getItem('primeiroAcesso')) {
                localStorage.setItem('primeiroAcesso', true);
              }

              localStorage.setItem(
                'usuario',
                JSON.stringify({ id, nome, email, aprovacoes: {} }),
              );
              setarLogado(true);
              window.location.reload();
            }
          } catch (error) {
            console.error('Erro ao realizar cadastro:', error);
            let message = 'Erro inesperado ao realizar cadastro!';
            let title = 'Erro';

            if (error.code && error.message) {
              title = error.code;
              message = `${error.message}: Provavelmente a API não está disponível.`;
            }

            if (error.response) {
              title = 'Erro ao cadastrar';
              if (
                error.response.status === 400 ||
                error.response.status === 409
              ) {
                console.log('error.response.data', error.response.data);
                message = error.response.data.message;
              }
            }

            toast({
              title: title,
              message: message,
              type: 'error',
              duration: 5000,
            });
          }
        }
      });

      loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const { email, senha } = getLoginData();

        try {
          const { data, status } = await login(email, senha);

          if (status === 200) {
            let aprovacoes = {};
            console.log(' [U] Usuário logado com sucesso:', data);
            verificarAprovacao(data.email).then((response) => {
              aprovacoes = response.data;

              localStorage.setItem('logadoAgora', 'true');

              if (!localStorage.getItem('primeiroAcesso')) {
                localStorage.setItem('primeiroAcesso', true);
              }

              const { id, nome, email } = data;

              if (id && nome && email) {
                localStorage.setItem(
                  'usuario',
                  JSON.stringify({ id, nome, email, aprovacoes: aprovacoes }),
                );
              }
              setarLogado(true);
              window.location.reload();
            });
          }

          if (status === 400) {
            toast({
              title: 'Erro ao realizar login',
              message: data,
              type: 'error',
              duration: 5000,
            });
          }
        } catch (error) {
          console.error('Erro ao realizar login:', error);
          let message = 'Erro inesperado ao realizar cadastro!';
          let title = 'Erro';
          if (error.code && error.message) {
            title = error.code;
            message = `${error.message}: ${error.message}.`;
          }

          if (error.response && error.response.status === 400) {
            title = 'Erro ao cadastrar';
            message = error.response.data.message;
          }

          toast({
            title: title,
            message: message,
            type: 'error',
            duration: 5000,
          });
        }
      });
    });
  }
});

// INÍCIO DO SCRIPT USADO NO FOOTER
function sobreFunction() {
  const sobreP = document.getElementById('sobreP');
  const suporteP = document.getElementById('suporteP');
  const localizacaoP = document.getElementById('localizacaoP');
  const footerMeta = document.getElementById('footerMeta');

  if (sobreP.style.display === 'none' || !sobreP.style.display) {
    sobreP.style.display = 'block';
    suporteP.style.display = 'none';
    localizacaoP.style.display = 'none';
    footerMeta.style.paddingTop = '2%';
  } else {
    sobreP.style.display = 'none';
    footerMeta.style.paddingTop = '5%';
  }
}

function suporteFunction() {
  const suporteP = document.getElementById('suporteP');
  const sobreP = document.getElementById('sobreP');
  const localizacaoP = document.getElementById('localizacaoP');
  const footerMeta = document.getElementById('footerMeta');

  if (suporteP.style.display === 'none' || !suporteP.style.display) {
    suporteP.style.display = 'block';
    sobreP.style.display = 'none';
    localizacaoP.style.display = 'none';
    footerMeta.style.paddingTop = '2%';
  } else {
    suporteP.style.display = 'none';
    footerMeta.style.paddingTop = '5%';
  }
}

function localizacaoFunction() {
  const localizacaoP = document.getElementById('localizacaoP');
  const sobreP = document.getElementById('sobreP');
  const suporteP = document.getElementById('suporteP');
  const footerMeta = document.getElementById('footerMeta');

  if (localizacaoP.style.display === 'none' || !localizacaoP.style.display) {
    localizacaoP.style.display = 'block';
    sobreP.style.display = 'none';
    suporteP.style.display = 'none';
    footerMeta.style.paddingTop = '2%';
  } else {
    localizacaoP.style.display = 'none';
    footerMeta.style.paddingTop = '5%';
  }
}

import modalHeaderControl from './components/header-user-form.js';
import setupMobileMenu from './components/header-mobile-menu.js';
import modalQuizControl from './components/quiz-modal-control.js';
import getQuizRespostas from './components/quiz-respostas.js';
import {
  clearData,
  getCadastroData,
} from './controllers/cadastro.controller.js';
import { getLoginData } from './controllers/login.controller.js';
import { setarLogado, usuarioLogado } from './utils/user.utils.js';
import { cadastro } from './services/cadastro.service.js';
import { login } from './services/login.service.js';

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
        console.log('Executando callback');
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
      console.log('Usuário logado');
      importarComponente('components/cta.html', 'componente-cta-quiz', () => {
        const scriptElement = document.querySelector(
          'script[type="module"][src="./scripts/auto-import-components.js"]',
        );
        const moduleNumber = scriptElement.getAttribute('data-module');

        console.log('Módulo:', moduleNumber);

        importarComponente(
          `components/${moduleNumber}`,
          'componente-quiz',
          () => {
            modalQuizControl(moduleNumber);
            const respostas = getQuizRespostas();
            console.log('Respostas:', respostas);
          },
        );
      });
    } else {
      console.log('Usuário não logado');
      importarComponente('components/cta-feedback.html', 'componente-cta-quiz');
    }
  }

  importarComponente('components/footer.html', 'componente-footer', () => {
    console.log('callback');
  });

  importarComponente('components/login.html', 'componente-login', () => {
    modalHeaderControl();

    const registrationForm = document.getElementById('cadastro');
    const loginForm = document.getElementById('login');

    registrationForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const { nome, email, senha, confirmarSenha } = getCadastroData();

      if (senha !== confirmarSenha) {
        alert('[SENHAS NÃO COINCIDEM]');

        clearData(
          document.getElementById('cadastro-senha'),
          document.getElementById('cadastro-repita-senha'),
        );
        document.getElementById('cadastro-senha').focus();

      } else {
        const retorno = await cadastro(nome, email, senha);

        console.log('Retorno do cadastro:', JSON.stringify(retorno));

        if (retorno.status === 201) {
          alert('[CADASTRO REALIZADO COM SUCESSO]');
        }
      }
    });

    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const { email, senha } = getLoginData();
      console.log('Dados do login:', { email, senha });
      login(email, senha).then((retorno) => {
        console.log('Retorno do login:', retorno);

        if (retorno) {
          setarLogado(true);
          window.location.reload();
        } else {
          alert('[ERRO AO REALIZAR LOGIN]');
        }
      });
    });
  });
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

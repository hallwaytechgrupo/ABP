import { setStepStatus } from "./profile.control.js";

function usuarioLogado() {
  const logado = localStorage.getItem('logado');
  if (logado === 'true') {
    for (let i = 1; i <= 3; i++) {
      const aprovado = getUsuarioAprovacaoModulo(i);
      setStepStatus(i, aprovado);
    }
    return true;
  }
  return false;
}

function setarLogado(status) {
  if (status === true || status === false) {
    localStorage.setItem('logado', status.toString());
  }
}

function getUsuario() {
  const userFromStorage = JSON.parse(localStorage.getItem('usuario'));

  const {
    id = null,
    nome = null,
    email = null,
    aprovacoes = {},
  } = userFromStorage;

  return { id, nome, email, aprovacoes };
}

function getUsuarioAprovacoes() {
  const { aprovacoes } = getUsuario();

  if (aprovacoes) return aprovacoes;
  return {};
}

function getUsuarioAprovacaoModulo(modulo) {
  const aprovacoes = getUsuarioAprovacoes();
  return aprovacoes[`modulo-${modulo}`];
}

function setUsuarioAprovacao(tentativa) {
  const usuario = JSON.parse(localStorage.getItem('usuario')) || {};

  usuario.aprovacoes = {
    ...usuario.aprovacoes,
    ...tentativa,
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));
}

function usuarioAprovadoEmTodos() {
  const modulos = getUsuarioAprovacoes();

  let todosTrue = true;

  for (const key in modulos) {
    if (!modulos[key]) { // Se algum valor não for true
      todosTrue = false;
      break;
    }
  }
  return todosTrue;
}

export {
  getUsuario,
  usuarioLogado,
  setarLogado,
  getUsuarioAprovacoes,
  setUsuarioAprovacao,
  usuarioAprovadoEmTodos,
  getUsuarioAprovacaoModulo,
};


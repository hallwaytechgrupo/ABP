function usuarioLogado() {
  const logado = localStorage.getItem('logado');
  return logado === 'true';
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
    tentativas = {},
  } = userFromStorage;

  return { id, nome, email, tentativas };
}

function getUsuarioAprovacoes() {
  const { tentativas } = getScrumDetails();

  if (tentativas) return tentativas;
  return {};
}

function setUsuarioAprovacao(tentativa) {
  const usuario = JSON.parse(localStorage.getItem('usuario')) || {};

  usuario.tentativas = {
    ...usuario.tentativas,
    ...tentativa,
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));
}

function usuarioAprovadoEmTodos() {
  const tentativas = getUsuarioAprovacoes();

  // Verifique se todas as tentativas são true
}

export {
  getUsuario,
  usuarioLogado,
  setarLogado,
  getUsuarioAprovacoes,
  setUsuarioAprovacao,
  usuarioAprovadoEmTodos,
};

/* OUTRA MANEIRA DE FAZER A MESMA FUNÇÃO
export function getScrumDetails() {
  const nome = localStorage.getItem('scrum-nome');
  const email = localStorage.getItem('scrum-email');
  
  return {
    nome: nome || null,
    email: email || null
  };
}
*/

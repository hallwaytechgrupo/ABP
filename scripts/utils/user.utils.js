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
  return {};
}

export { usuarioLogado, setarLogado, getUsuario };

export function getScrumDetails() {
  const { nome = null, email = null } = {
    nome: localStorage.getItem('scrum-nome'),
    email: localStorage.getItem('scrum-email'),
  };

  return { nome, email };
}

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

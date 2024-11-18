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

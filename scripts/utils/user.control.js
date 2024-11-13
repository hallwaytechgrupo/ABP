// const usuarioLogado = () => {
// Faça a tarefa aqui
//  return true;
//};

//const setarLogado = (status) => {
  // Faça a tarefa aqui

 // return status;
//};

// export { usuarioLogado, setarLogado };

function usuarioLogado() {
    const logado = localStorage.getItem('logado');
    return logado === 'true';
}

function setarLogado(status){
    if (status === true || status === false) {
        localStorage.setItem('logado', status.toString());
    }

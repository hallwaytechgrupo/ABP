export const getLoginData = () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  console.log({
    email: email,
    password: password,
  });

  return {
    email: email,
    senha: password,
  };
};

export const login = async (email, password) => {
  // Faça a tarefa aqui
};

export const getLoginData = () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  return {
    email: email,
    senha: password,
  };
};

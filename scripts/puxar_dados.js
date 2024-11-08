const registrationForm = document.getElementById('registrationForm')

registrationForm.addEventListener('submit', event => {
  event.preventDefault() // Impede o envio padrão do formulário

  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const confirmPassword = document.getElementById('confirmPassword').value
  console.log({
    name: name,
    email: email,
    password: password
  })

  return {
    name: name,
    email: email,
    password: password
  }

  
})

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  
  if (email === '' || password === '') {
    return console.log('All form fields must be filled in');
  }
  const data = {};
  data.email = email;
  data.password = password;
  console.log(data);
  event.target.reset();
}

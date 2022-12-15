const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onForm);

function onForm(event) {
event.preventDefault();
const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = { email, password };

if(event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
 alert('всі поля повинні бути заповнені')
} else {
  console.log(formData);
}
 formEl.reset();
}
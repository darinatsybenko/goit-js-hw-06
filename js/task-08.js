const formEl = document.querySelector('.login-form');
console.log(formEl);


formEl.addEventListener('submit', onForm);

function onForm(event) {
event.preventDefault();

const formData = new FormData(event.currentTarget);
console.log(formData);

formData.forEach((value, password) => {
console.log('name =', value);
console.log('password =', password);
});

if(event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
return alert('всі поля повинні бути заповнені')
}
 event.currentTarget.reset();
}

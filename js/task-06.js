const inputRefs = document.querySelector('#validation-input');


inputRefs.addEventListener('blur', colorInput);

function colorInput() {

    if(inputRefs.dataset.length != inputRefs.value.length) {
        inputRefs.classList.remove('valid');
       return inputRefs.classList.add('invalid');
    }
    
        inputRefs.classList.remove('invalid');
       return inputRefs.classList.add('valid');
    
}

const button = document.getElementById('button');
let formData = document.getElementById('formData');

const li1 = document.getElementById('1');
const li2 = document.getElementById('2');
const li3 = document.getElementById('3');
const li4 = document.getElementById('4');

button.addEventListener('click', () => {
    li1.innerText = `First Name is ${firstName.value}`;
    li2.innerText = `Last Name is ${lastName.value}`;
    li3.innerText = `Email is ${email.value}`;
    li4.innerText = `Country is ${country.value}`;
    formData.classList.add('d-block');
})
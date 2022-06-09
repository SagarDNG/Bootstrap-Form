
const button = document.getElementById('button');
const formData = document.getElementById('formData');

const li1 = document.getElementById('1');
const li2 = document.getElementById('2');
const li3 = document.getElementById('3');
const li4 = document.getElementById('4');

button.addEventListener('click', () => {
    console.log('hi');
    li1.innerHTML = `First Name is ${firstName.value}`;
    li2.innerHTML = `Last Name is ${lastName.value}`;
    li3.innerHTML = `Email is ${email.value}`;
    li4.innerHTML = `Country is ${country.value}`;
    formData.classList.add('d-block');
})
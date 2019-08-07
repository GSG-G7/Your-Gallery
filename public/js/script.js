const name = document.querySelector('#name');
const email = document.querySelector('#email');
const form = document.querySelector('.contact');

const checkEmail = () => {
  if (email.validity.typeMismatch) {
    email.classList.add('invalid');
    return false;
  } if (email.validity.valueMissing) {
    email.classList.add('invalid');
    return false;
  }
  email.classList.add('valid');
  return true;
};

const checkName = () => {
  if (name.validity.valueMissing) {
    name.classList.add('invalid');
    return false;
  }
  name.classList.add('valid');
  return true;
};

form.addEventListener('sumbit', (e) => {
  if (!checkEmail()) {
    e.preventDefault();
  }
  if (!checkName()) {
    e.preventDefault();
  }
});

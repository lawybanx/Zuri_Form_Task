const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const errors = document.querySelectorAll('.error-msg');

const toggleErrors = (field, index) => {
  field.addEventListener('input', e => {
    if (!field.validity.valid) {
      errors[index].classList.add('show');
    } else {
      errors[index].classList.remove('show');
    }
  });
};

toggleErrors(fname, 0);
toggleErrors(lname, 1);
toggleErrors(email, 2);
toggleErrors(password, 3);

form.addEventListener('submit', e => {
  e.preventDefault();
  inputs.forEach(input => {
    if (!input.validity.valid) {
      errors.forEach(error => {
        input.classList.add('form-input-control');
        error.classList.add('show');
      });
    } else if (
      !input.value.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      input.classList.add('form-input-control');
    } else if (input.validity.valid) {
      alert('Form Submitted Successfully');
      // refresh page
      window.location.reload();
    }
  });
});

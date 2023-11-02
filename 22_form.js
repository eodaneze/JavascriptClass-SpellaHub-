const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(event) {
  let valid = true;

  // Name validation
  if (nameInput.value === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation
  if (emailInput.value === '') {
    emailError.textContent = 'Email is required';
    valid = false;
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Invalid email format';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  if (!valid) {
    event.preventDefault();
  }
});

function validateEmail(email) {
  // A simple email validation regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
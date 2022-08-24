const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const error = document.querySelector('.error');
const passwordParagraphs = document.querySelectorAll('.password');

password.addEventListener('input', checkPassword);
confirmPassword.addEventListener('input', checkPassword);

function checkPassword() {
  if (
    password.value &&
    confirmPassword.value &&
    password.value == confirmPassword.value
  ) {
    passwordParagraphs.forEach((passwordParagraph) => {
      passwordParagraph.classList.remove('invalid');
      error.style.visibility = 'hidden';
    });
  } else {
    passwordParagraphs.forEach((passwordParagraph) => {
      passwordParagraph.classList.add('invalid');
      error.style.visibility = 'visible';
    });
  }
}

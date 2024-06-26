const emailInput = document.querySelector('.email-input-field');
const emailInputBtn = document.querySelector('.email-input-button');

emailInputBtn.addEventListener('click', validateEmail);

function validateEmail() {

  const message = document.querySelector('.message');

  if (emailInput.value !== '') {
    if (emailInput.checkValidity()) {
      message.textContent = 'Email added!';
      message.className = 'message success';
      message.style.visibility = 'visible';
      localStorage.setItem("submittedEmail", emailInput.value);
      emailInput.value = '';
    } else {
      message.textContent = 'Please enter a valid email address.';
      message.className = 'message error';
      message.style.visibility = 'visible';
    }
  }
}


import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

check();
function check() {
  const savedDate = localStorage.getItem('feedback-form-state');
  if (savedDate !== null) {
    const parsedSavedDate = JSON.parse(savedDate);
    form.elements.email.value = parsedSavedDate.email || '';
    form.elements.message.value = parsedSavedDate.message || '';
  }
}
const userData = {};
function handleInput(event) {
  let savedDate = localStorage.getItem('feedback-form-state');
  savedDate = savedDate ? JSON.parse(savedDate) : {};
  savedDate[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(savedDate));
}

form.addEventListener('input', throttle(handleInput, 500));

function handleSubmit(event) {
  event.preventDefault();
  const savedDate = localStorage.getItem('feedback-form-state');
  if (savedDate !== null) {
    console.log(JSON.parse(savedDate));
  }

  localStorage.removeItem('feedback-form-state');
  form.reset();
}
form.addEventListener('submit', handleSubmit);

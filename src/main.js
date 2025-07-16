const formEl = document.querySelector('.form');
let query = null;
const onSubmit = e => {
  e.preventDefault();

  query = formEl.elements[0].value;
};

formEl.addEventListener('submit', onSubmit);

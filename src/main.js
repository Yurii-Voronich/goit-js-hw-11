import { getImagesByQuery } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import iziToast from 'izitoast';

const formEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');

const onSubmit = e => {
  let userQuery = null;
  e.preventDefault();
  userQuery = formEl.elements['search-text'].value.trim();
  getImagesByQuery(userQuery)
    .then(res => {
      return res.data.hits;
    })
    .then(res => {
      // приходить масив з картинками;
      if (res.length === 0) {
        iziToast.error({
          position: 'topRight',
          title: 'Error',
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
      }
      galleryEl.insertAdjacentHTML('beforeend', createMarkup(res));
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        title: 'Error',
        message: `${err}`,
      });
    });
  formEl.reset();
  galleryEl.innerHTML = '';
};

formEl.addEventListener('submit', onSubmit);

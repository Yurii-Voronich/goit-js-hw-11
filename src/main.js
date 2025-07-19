import { getImagesByQuery } from './js/pixabay-api';
import {
  createMarkup,
  createLightbox,
  clearMarkup,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';

const formEl = document.querySelector('.form');
export const galleryEl = document.querySelector('.gallery');
export const loaderEl = document.querySelector('.loader');

const onSubmit = e => {
  e.preventDefault();
  clearMarkup();

  const userQuery = formEl.elements['search-text'].value.trim();
  if (!userQuery) {
    console.log('pustrequset');
    return iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: `please fill your search request`,
    });
  }
  showLoader();
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
      createLightbox();
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        title: 'Error',
        message: `${err}`,
      });
    })
    .finally(res => {
      hideLoader();
    });

  formEl.reset();
};

formEl.addEventListener('submit', onSubmit);

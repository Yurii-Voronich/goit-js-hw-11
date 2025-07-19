import { galleryEl, loaderEl } from '../main';
import SimpleLightbox from 'simplelightbox';
export const createMarkup = arr => {
  return arr
    .map(
      ({
        largeImageURL,
        tags,
        webformatURL,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img 
        width="360"
		  class="gallery-image" 
		  src="${webformatURL}" 
		  alt="${tags}" 
		/>
	</a>
        <ul class = "describtion">
        <li class = "describtion-item">Likes <p>${likes}</p><li>
        <li class = "describtion-item">Views <p>${views}</p><li>
        <li class = "describtion-item">Downloads <p>${downloads}</p><li>
        <li class = "describtion-item">Comments <p>${comments}</p><li>
        </ul>
</li>`;
      }
    )
    .join('');
};
export const clearMarkup = () => {
  galleryEl.innerHTML = '';
};
const gallery = new SimpleLightbox('.gallery a');
export function createLightbox() {
  gallery.refresh();
}
export const showLoader = () => {
  loaderEl.classList.remove('visually-hidden');
};
export const hideLoader = () => {
  loaderEl.classList.add('visually-hidden');
};

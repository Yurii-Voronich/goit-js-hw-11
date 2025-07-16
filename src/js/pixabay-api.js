import axios from 'axios';
const getImagesByQuery = query => {
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '51348790-b4b99e7923fa7dbd5fd948fd1',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

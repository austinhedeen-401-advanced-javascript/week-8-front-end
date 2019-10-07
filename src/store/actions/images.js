const API = process.env.REACT_APP_API;

const getFromStore = (payload) => {
  return {
    type: 'FETCH_IMAGES',
    payload,
  };
};

const addToStore = (payload) => {
  return {
    type: 'ADD_IMAGE',
    payload,
  };
};

const fetchImages = () => (dispatch) => {
  return fetch(`${API}/api/v1/image`)
    .then((results) => results.json())
    .then((data) => dispatch(getFromStore(data)));
};

const uploadImage = (imageData) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(imageData),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/cloudinary`, options)
    .then((results) => results.json())
    .then((data) => dispatch(addToStore(data)));
};

export default {
  uploadImage,
  fetchImages,
};

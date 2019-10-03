const API = process.env.REACT_APP_API;

const get = (payload) => {
  return {
    type: 'FETCH_IMAGES',
    payload,
  };
};

const add = (payload) => {
  return {
    type: 'ADD_IMAGE',
    payload,
  };
};

const fetchImages = () => (dispatch) => {
  return fetch(`${API}/api/v1/image`)
    .then((results) => results.json())
    .then((data) => dispatch(get(data)));
};

const addImage = (image) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(image),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/api/v1/image`, options)
    .then((results) => results.json())
    .then((data) => dispatch(add(data)));
};

export default {
  addImage,
  fetchImages,
};

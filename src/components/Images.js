import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import imageActions from '../store/actions/images';

const Images = ({ images, fetchImages, uploadImage }) => {
  const [imageData, setImageData] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [imageDescription, setImageDescription] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  function handleChosenFile(file) {
    setImageTitle(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    uploadImage({ data: imageData });
    setImageData('');
    setImageTitle('');
    setImageDescription('');
  }

  return (
    <>
      {images.map((image, imageIndex) => (
        <img key={image._id} src={image.url} alt={`img-${imageIndex}`}/>
      ))}
      <form onSubmit={handleSubmit}>
        <img src={imageData} alt="Upload preview" />
        <br/>
        <input
          type="file"
          onChange={(e) => handleChosenFile(e.target.files[0])}
        />
        <br/>
        <input
          type="text"
          placeholder="Title"
          value={imageTitle}
          onChange={(e) => setImageTitle(e.target.value)}
        />
        <br/>
        <textarea
          placeholder="Description"
          value={imageDescription}
          onChange={(e) => setImageDescription(e.target.value)}
        />
        <br/>
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

Images.propTypes = {
  addImage: PropTypes.func,
  fetchImages: PropTypes.func,
  images: PropTypes.array,
  uploadImage: PropTypes.func,
};

const mapStateToProps = (state) => ({
  images: state.images,
});

const mapDispatchToProps = (dispatch) => ({
  addImage: (data) => dispatch(imageActions.addImage(data)),
  fetchImages: () => dispatch(imageActions.fetchImages()),
  uploadImage: (imageData) => dispatch(imageActions.uploadImage(imageData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);

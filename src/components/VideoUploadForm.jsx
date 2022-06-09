/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import ButtonAction from './ButtonAction';
import InputValidator from './InputValidator';

const VideoUploadForm = () => {
  const [videoData, setVideoData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [formVideoData, setVideoFormData] = useState({
    title: '',
    description: '',
  });
  const token = localStorage.getItem('token');

  const handleVideoChange = (e) => {
    setVideoData(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImageData(e.target.files[0]);
  };

  const onChange = (e) => {
    setVideoFormData({
      ...formVideoData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formVideoData.title);
    data.append('description', formVideoData.description);
    data.append('video', videoData);
    data.append('image', imageData);
    const response = await axios.post('http://localhost:8080/videos', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `bearer ${token}`,
      },
    });

    console.log(response);
  };

  return (
    <form>
      <div className="form__content">
        <label className="uploadLabel">
          <input
            type="file"
            id="video"
            name="file"
            className="uploadButton"
            accept="video/*"
            onChange={handleVideoChange}
          />
          Subir Video
        </label>
        <InputValidator
          name="title"
          id="title"
          value={formVideoData.title}
          type="text"
          classname="input__Login"
          placeholder="Titulo del video"
          onChange={onChange}
          errorMessage="El titulo es obligatorio "
          required
        />
        <InputValidator
          name="description"
          id="description"
          value={formVideoData.description}
          type="text"
          classname="input__Login"
          placeholder="Descripcion del video"
          onChange={onChange}
          errorMessage="La descripcion es obligatorio "
          required
        />
        <input
          type="file"
          id="image"
          name="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </div>
      <div className="form__footer">
        <ButtonAction
          className="btn-action--form"
          content="Next"
          type="submit"
          handleClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default VideoUploadForm;

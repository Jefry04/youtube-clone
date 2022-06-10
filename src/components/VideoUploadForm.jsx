import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Dropzone, MIME_TYPES, IMAGE_MIME_TYPE } from '@mantine/dropzone';

import ButtonAction from './ButtonAction';
import InputValidator from './InputValidator';
import DropzonePreview from './DropzonePreview';
import { showFormAction } from '../store/reducers/Modals.reducer';

export const dropzoneChildren = (uploadVideoState, mediaUrl, isImage) => (
  <DropzonePreview
    uploadVideoState={uploadVideoState}
    mediaUrl={mediaUrl}
    isImage={isImage}
  />
);

const VideoUploadForm = () => {
  const [videoData, setVideoData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadVideoState, setUploadVideoState] = useState({
    accepted: false,
    rejected: false,
  });
  const [uploadImageState, setUploadImageState] = useState({
    accepted: false,
    rejected: false,
  });
  const [formVideoData, setVideoFormData] = useState({
    title: '',
    description: '',
    labels: '',
  });
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const url = process.env.REACT_APP_BACKEND_URI;

  const onChange = (e) => {
    setVideoFormData({
      ...formVideoData,
      [e.target.name]: e.target.value,
    });
  };

  const readFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileData = e.target.result.split(';')[0];
      const mimeType = fileData.substring(fileData.indexOf(':') + 1);
      const fileType = mimeType.split('/')[0];
      if (fileType === 'video') setVideoPreview(e.target.result);
      if (fileType === 'image') setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const labelsArray = formVideoData.labels.split(',');

    const data = new FormData();
    data.append('title', formVideoData.title);
    data.append('description', formVideoData.description);
    data.append('labels', JSON.stringify(labelsArray));

    data.append('video', videoData);
    data.append('image', imageData);

    const response = await axios.post(`${url}videos`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `bearer ${token}`,
      },
    });
    if (response.status === 201) {
      dispatch(showFormAction());
    } else console.log('no subio el video');
  };

  return (
    <form className="video-upload-form">
      <header className="video-upload-form__header">
        <div className="video-upload-form__media">
          <div className="video-upload-form__media__container">
            <Dropzone
              onDrop={(files) => {
                setVideoData(files[0]);
                readFile(files[0]);
                setUploadVideoState({ ...uploadVideoState, accepted: true });
              }}
              onReject={() =>
                setUploadVideoState({ ...uploadVideoState, rejected: true })
              }
              multiple={false}
              accept={MIME_TYPES.mp4}
            >
              {() => dropzoneChildren(uploadVideoState, videoPreview, false)}
            </Dropzone>
          </div>
          {videoPreview && (
            <button className="video-upload-form__trash-btn" type="button">
              <span>x</span>
            </button>
          )}
        </div>
        <div className="video-upload-form__media">
          <div className="video-upload-form__media__container">
            <Dropzone
              accept={IMAGE_MIME_TYPE}
              onDrop={(files) => {
                setImageData(files[0]);
                readFile(files[0]);
                setUploadImageState({ ...uploadImageState, accepted: true });
              }}
              onReject={() =>
                setUploadImageState({ ...uploadImageState, rejected: true })
              }
              multiple={false}
            >
              {() => dropzoneChildren(uploadImageState, imagePreview, true)}
            </Dropzone>
          </div>
          {imagePreview && (
            <button className="video-upload-form__trash-btn" type="button">
              <span>x</span>
            </button>
          )}
        </div>
      </header>
      <div className="videoform__content">
        <InputValidator
          name="title"
          id="title"
          value={formVideoData.title}
          type="text"
          classname="video-upload-form__input"
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
          classname="video-upload-form__input"
          placeholder="Descripcion del video"
          onChange={onChange}
          errorMessage="La descripcion es obligatorio "
          required
        />
        <InputValidator
          name="labels"
          id="labels"
          value={formVideoData.labels}
          type="text"
          classname="video-upload-form__input"
          placeholder="Etiqueta1, Etiqueta2"
          onChange={onChange}
        />
      </div>
      <div className="video-upload-form__footer">
        <ButtonAction
          className="btn-action--videoup"
          content="SUBIR VIDEO"
          type="submit"
          handleClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default VideoUploadForm;

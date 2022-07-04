import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropzone, MIME_TYPES, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Loader, Progress } from '@mantine/core';

import ButtonAction from './ButtonAction';
import InputValidator from './InputValidator';
import DropzonePreview from './DropzonePreview';
import { postVideo } from '../store/reducers/Video.actionCreators';

export const dropzoneChildren = (uploadVideoState, mediaUrl, isImage) => (
  <DropzonePreview
    uploadVideoState={uploadVideoState}
    mediaUrl={mediaUrl}
    isImage={isImage}
  />
);

const VideoUploadForm = () => {
  const { loading, uploading, uploadingPercentage } = useSelector(
    (state) => state.VideoReducer
  );
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
    dispatch(postVideo(data));
  };

  const handleVideo = (files) => {
    setVideoData(files[0]);
    readFile(files[0]);
    setUploadVideoState({ ...uploadVideoState, accepted: true });
  };
  const handleImage = (files) => {
    setImageData(files[0]);
    readFile(files[0]);
    setUploadImageState({ ...uploadImageState, accepted: true });
  };

  if (!uploading && loading) {
    return (
      <div className="loading">
        <Loader color="red" size={100} />
        <h2>Procesando video...</h2>
      </div>
    );
  }

  return (
    <form className="video-upload-form">
      <header className="video-upload-form__header">
        <div className="video-upload-form__media">
          <div className="video-upload-form__media__container">
            <Dropzone
              onDrop={(files) => {
                handleVideo(files);
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
                handleImage(files);
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
        {uploading && (
          <div className="video-upload-fom__uploading">
            <Progress size="sm" value={uploadingPercentage} />
            <span>Cargando archivos...</span>
          </div>
        )}
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
          className="btn-action--profile"
          content="SUBIR VIDEO"
          type="submit"
          handleClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default VideoUploadForm;

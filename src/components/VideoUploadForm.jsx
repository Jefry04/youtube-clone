/* eslint-disable jsx-a11y/media-has-caption */

import React, { useState } from 'react';
import { X, Video } from 'tabler-icons-react';
import axios from 'axios';
import { Group, Text } from '@mantine/core';
import { Dropzone, MIME_TYPES, IMAGE_MIME_TYPE } from '@mantine/dropzone';

import ButtonAction from './ButtonAction';
import InputValidator from './InputValidator';

function ImageUploadIcon({ uploadVideoState, mediaUrl, isImage }) {
  if (uploadVideoState.accepted) {
    return isImage ? (
      <img src={mediaUrl} className="videoform__videopreview" alt="preview" />
    ) : (
      <video src={mediaUrl} className="videoform__videopreview" />
    );
  }
  if (uploadVideoState.rejected) {
    return <X />;
  }
  return (
    <Group position="center" spacing="xl" style={{ pointerEvents: 'none' }}>
      <Text size="xl" inline>
        CARGAR VIDEO
      </Text>
      <Video />
    </Group>
  );
}

export const dropzoneChildren = (uploadVideoState, mediaUrl, isImage) => (
  <ImageUploadIcon
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

  const [formVideoData, setVideoFormData] = useState({
    title: '',
    description: '',
    labels: '',
  });
  const token = localStorage.getItem('token');

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
      <header className="videoform__header">
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

        <Dropzone
          accept={IMAGE_MIME_TYPE}
          onDrop={(files) => {
            setImageData(files[0]);
            readFile(files[0]);
            setUploadVideoState({ ...uploadVideoState, accepted: true });
          }}
          onReject={() =>
            setUploadVideoState({ ...uploadVideoState, rejected: true })
          }
          multiple={false}
        >
          {() => dropzoneChildren(uploadVideoState, imagePreview, true)}
        </Dropzone>
      </header>
      <div className="videoform__content">
        <InputValidator
          name="title"
          id="title"
          value={formVideoData.title}
          type="text"
          classname="input__videoform"
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
          classname="input__videoform"
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
          classname="input__videoform"
          placeholder="Etiqueta1, Etiqueta2"
          onChange={onChange}
        />
      </div>
      <div className="videoform__footer">
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

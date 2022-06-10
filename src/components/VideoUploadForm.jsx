/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { X, Video } from 'tabler-icons-react';
import axios from 'axios';
import { Group, Text } from '@mantine/core';
import { Dropzone, MIME_TYPES, IMAGE_MIME_TYPE } from '@mantine/dropzone';

import ButtonAction from './ButtonAction';
import InputValidator from './InputValidator';

function ImageUploadIcon({ uploadVideoState, videoPreview, imageData }) {
  if (uploadVideoState.accepted) {
    return videoPreview ? (
      <video src={videoPreview} className="videoform__videopreview" />
    ) : (
      <img src={imageData} className="videoform__videopreview" alt="preview" />
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

export const dropzoneChildren = (uploadVideoState, videoPreview, imageData) => (
  <ImageUploadIcon
    uploadVideoState={uploadVideoState}
    size={80}
    videoPreview={videoPreview}
    imageData={imageData}
  />
);

const VideoUploadForm = () => {
  const [videoData, setVideoData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
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
  const dropzoneRef = useRef();

  const onChange = (e) => {
    setVideoFormData({
      ...formVideoData,
      [e.target.name]: e.target.value,
    });
  };

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => setVideoPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const labelsArray = formVideoData.labels.split(',');

    const data = new FormData();
    data.append('title', formVideoData.title);
    data.append('description', formVideoData.description);
    data.append('video', videoData);
    data.append('image', imageData);
    data.append('labels', labelsArray);

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
          ref={dropzoneRef}
          onDrop={(files) => {
            setVideoData(files[0]);
            readFile(files[0]);
            setUploadVideoState({ ...uploadVideoState, accepted: true });
          }}
          onReject={(files) =>
            setUploadVideoState({ ...uploadVideoState, rejected: true })
          }
          multiple={false}
          // maxSize={3 * 1024 ** 2}
          accept={MIME_TYPES.mp4}
        >
          {(state) => dropzoneChildren(uploadVideoState, videoPreview)}
        </Dropzone>

        <Dropzone
          accept={IMAGE_MIME_TYPE}
          onDrop={(files) => {
            setImageData(files[0]);
            // readFile(files[0]);
            setUploadVideoState({ ...uploadVideoState, accepted: true });
          }}
          onReject={(files) =>
            setUploadVideoState({ ...uploadVideoState, rejected: true })
          }
          multiple={false}
          // maxSize={3 * 1024 ** 2}
        >
          {() => dropzoneChildren(uploadVideoState, imageData)}
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

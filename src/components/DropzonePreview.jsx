import React from 'react';
import { Group, Text } from '@mantine/core';
import { X, Video, Photo } from 'tabler-icons-react';
import ReactPlayer from 'react-player';

const DropzonePreview = ({ uploadVideoState, mediaUrl, isImage }) => {
  if (uploadVideoState.accepted) {
    return isImage ? (
      <figure className="video-upload-form__fig">
        <img src={mediaUrl} className="video-upload-form__img" alt="preview" />
      </figure>
    ) : (
      <ReactPlayer url={mediaUrl} height="100%" width="100%" />
    );
  }
  if (uploadVideoState.rejected) {
    return <X />;
  }
  return (
    <Group position="center" spacing="xl" style={{ pointerEvents: 'none' }}>
      <Text size="xl" inline>
        {isImage ? 'CARGAR IMAGEN' : 'CARGAR VIDEO'}
      </Text>
      {isImage ? <Photo /> : <Video />}
    </Group>
  );
};

export default DropzonePreview;

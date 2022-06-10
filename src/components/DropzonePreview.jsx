import React from 'react';
import { Group, Text } from '@mantine/core';
import { X, Video } from 'tabler-icons-react';
import ReactPlayer from 'react-player';

const DropzonePreview = ({ uploadVideoState, mediaUrl, isImage }) => {
  if (uploadVideoState.accepted) {
    return isImage ? (
      <img src={mediaUrl} className="videoform__videopreview" alt="preview" />
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
        CARGAR VIDEO
      </Text>
      <Video />
    </Group>
  );
};

export default DropzonePreview;

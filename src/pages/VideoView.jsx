import React from 'react';
import EmbeddedVideo from '../components/EmbeddedVideo';

const VideoView = () => {
  return (
    <div className="video__container">
      <EmbeddedVideo />
      <div className="comentarios">area comentarios</div>
      <div className="lista video">lista de videos</div>
    </div>
  );
};

export default VideoView;

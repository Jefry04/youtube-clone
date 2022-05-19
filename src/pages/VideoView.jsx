import React from 'react';
import EnbeddedVideo from '../components/EmbeddedVideo';

const VideoShow = () => {
  return (
    <div className="video__container">
      <EnbeddedVideo />
      <div className="comentarios">area comentarios</div>
      <div className="lista video">lista de videos</div>
    </div>
  );
};

export default VideoShow;

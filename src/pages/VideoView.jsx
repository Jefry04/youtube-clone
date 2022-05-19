import React from 'react';
import EmbeddedVideo from '../components/EmbeddedVideo';
import VideoList from '../components/VideoList';

const VideoView = () => {
  return (
    <div className="video__container">
      <EmbeddedVideo />
      <div className="comentarios">area comentarios</div>
      <div className="videoView__list">
        <VideoList />
      </div>
    </div>
  );
};

export default VideoView;

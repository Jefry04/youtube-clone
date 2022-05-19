import React from 'react';
import VideoList from '../components/VideoList';

const VideoView = () => {
  return (
    <div className="video__container">
      <div className="donde va el vide">area visualizacion</div>
      <div className="comentarios">area comentarios</div>
      <div className="videoView__list">
        <VideoList />
      </div>
    </div>
  );
};

export default VideoView;

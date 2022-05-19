import React from 'react';
import VideoList from '../components/VideoList';

const VideoShow = () => {
  return (
    <div className="video__container">
      <div className="donde va el vide">area visualizacion</div>
      <div className="comentarios">area comentarios</div>
      <div className="videoshow__list">
        <VideoList />
      </div>
    </div>
  );
};

export default VideoShow;

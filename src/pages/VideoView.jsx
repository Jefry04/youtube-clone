import React from 'react';
import Video from '../components/Video';
import VideoList from '../components/VideoList';

const VideoView = () => {
  return (
    <div className="video__container">
      <Video />
      <div className="comentarios">area comentarios</div>
      <div className="videoView__list">
        <VideoList />
      </div>
    </div>
  );
};

export default VideoView;

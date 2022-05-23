import React from 'react';
import Video from '../components/Video';
import VideoList from '../components/VideoList';
import VideoComments from '../components/VideoComments';

const VideoView = () => {
  return (
    <div className="videoview">
      <div className="videoview__container">
        <div className="videoview__content">
          <div className="videoview__video">
            <Video />
          </div>
          <div className="videoview__coments">
            <VideoComments />
          </div>
        </div>
        <aside className="viewview__list">
          <VideoList />
        </aside>
      </div>
    </div>
  );
};

export default VideoView;

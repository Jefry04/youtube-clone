import React from 'react';
import { useSelector } from 'react-redux';
import shuffle from 'lodash/shuffle';
import Card from './Card';

function VideoList() {
  const { videos, loading } = useSelector((state) => state.VideoReducer);
  const randomVideos = shuffle(videos);

  return loading ? (
    <div> cargando</div>
  ) : (
    <div className="card__container-row">
      {randomVideos &&
        randomVideos.map((video) => (
          <Card key={video.id} video={video} showAvatar={false} />
        ))}
    </div>
  );
}

export default VideoList;

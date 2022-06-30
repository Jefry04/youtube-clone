import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

function VideoList() {
  const { videos, loading } = useSelector((state) => state.VideoReducer);
  return loading ? (
    <div> cargando</div>
  ) : (
    <div className="card__container-row">
      {videos &&
        videos.map((video) => (
          <Card key={video.id} video={video} showAvatar={false} />
        ))}
    </div>
  );
}

export default VideoList;

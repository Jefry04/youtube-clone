/* eslint-disable no-underscore-dangle */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Card from './Card';
import ButtonAction from './ButtonAction';
import {
  actionHasFilterVideo,
  fetchFilterVideos,
} from '../store/reducers/Video.reducer';

function VideoGrid() {
  const { labels } = useSelector((state) => state.LayoutReducer);
  const { hasFilterVideos, filtersVideo, videos, loading } = useSelector(
    (state) => state.VideoReducer
  );
  const dispatch = useDispatch();

  const handleCLick = (labelName) => {
    dispatch(fetchFilterVideos(labelName));
    dispatch(actionHasFilterVideo(true));
  };

  const handleAllVideos = () => dispatch(actionHasFilterVideo(false));

  return hasFilterVideos ? (
    <>
      <div className="filter">
        <div className="filter__container">
          <ButtonAction
            content="Todos"
            className="btn-action--filter"
            handleClick={handleAllVideos}
          />
          {labels.map((label) => (
            <ButtonAction
              key={label._id}
              content={label.name}
              className="btn-action--filter"
              handleClick={() => handleCLick(label.name)}
            />
          ))}
        </div>
      </div>
      <div className="card__container">
        {filtersVideo && filtersVideo.map((video) => <Card video={video} />)}
      </div>
    </>
  ) : (
    <>
      <div className="filter">
        <div className="filter__container">
          {labels.map((label) => (
            <ButtonAction
              key={label._id}
              content={label.name}
              className="btn-action--filter"
              handleClick={() => handleCLick(label.name)}
            />
          ))}
        </div>
      </div>
      {loading ? (
        <div> cargando</div>
      ) : (
        <div className="card__container">
          {videos &&
            videos.map((video) => <Card key={video.id} video={video} />)}
        </div>
      )}
    </>
  );
}

export default VideoGrid;

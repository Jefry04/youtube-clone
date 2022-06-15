/* eslint-disable no-underscore-dangle */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Cards from './Cards';
import ButtonAction from './ButtonAction';
import {
  actionHasFilterVideo,
  fetchFilterVideos,
} from '../store/reducers/Video.reducer';

function VideoGrid() {
  const { labels } = useSelector((state) => state.LayoutReducer);
  const { hasFilterVideos, filtersVideo } = useSelector(
    (state) => state.VideoReducer
  );
  const dispatch = useDispatch();

  const handleCLick = (labelName) => {
    dispatch(fetchFilterVideos(labelName));
    dispatch(actionHasFilterVideo(true));
  };

  return hasFilterVideos ? (
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
      <ul> Encontramos los videos:</ul>
      {filtersVideo.map((video) => (
        <li>{video.title}</li>
      ))}
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
      <Cards className="card__container" />
    </>
  );
}

export default VideoGrid;

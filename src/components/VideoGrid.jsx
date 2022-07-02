/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shuffle from 'lodash/shuffle';
import Card from './Card';
import ButtonAction from './ButtonAction';
import {
  actionHasFilterVideo,
  fetchFilterVideos,
} from '../store/reducers/Video.actionCreators';

function VideoGrid({ page, setPage }) {
  const { labels } = useSelector((state) => state.LayoutReducer);
  const { hasFilterVideos, filtersVideo, videos, hasMore, hasPrevious } =
    useSelector((state) => state.VideoReducer);
  const dispatch = useDispatch();

  const handleCLick = (labelName) => {
    dispatch(fetchFilterVideos(labelName));
    dispatch(actionHasFilterVideo(true));
  };

  const handleAllVideos = () => {
    setPage(1);
    dispatch(actionHasFilterVideo(false));
  };
  const randomVideos = shuffle(videos);
  const randomLabels = shuffle(labels);
  return (
    <>
      <div className="filter">
        <div className="filter__container">
          <ButtonAction
            content="Todos"
            className="btn-action--filter"
            handleClick={handleAllVideos}
          />
          {randomLabels?.map((label) => (
            <ButtonAction
              key={label._id}
              content={label.name}
              className="btn-action--filter"
              handleClick={() => handleCLick(label.name)}
            />
          ))}
        </div>
      </div>
      {hasFilterVideos ? (
        <div className="card__container">
          {filtersVideo &&
            filtersVideo.map((video) => <Card video={video} key={video._id} />)}
        </div>
      ) : (
        <>
          <div className="card__container">
            {randomVideos &&
              randomVideos.map((video) => (
                <Card key={video.id} video={video} />
              ))}
          </div>
          <div className="button__pagination">
            <button
              type="button"
              className={!hasPrevious ? 'button__disabled' : ''}
              onClick={() => setPage(page - 1)}
            >
              ❮
            </button>
            <button
              type="button"
              className={!hasMore ? 'button__disabled' : ''}
              onClick={() => setPage(page + 1)}
            >
              ❯
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default VideoGrid;

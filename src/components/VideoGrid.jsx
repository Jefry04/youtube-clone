/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import ButtonAction from './ButtonAction';
import {
  actionHasFilterVideo,
  fetchFilterVideos,
} from '../store/reducers/Video.actionCreators';

function VideoGrid({ page, setPage }) {
  const { labels } = useSelector((state) => state.LayoutReducer);
  const { hasFilterVideos, filtersVideo, videos, loading, hasMore } =
    useSelector((state) => state.VideoReducer);
  const dispatch = useDispatch();

  const handleCLick = (labelName) => {
    dispatch(fetchFilterVideos(labelName));
    dispatch(actionHasFilterVideo(true));
  };

  const handleAllVideos = () => dispatch(actionHasFilterVideo(false));

  return (
    <>
      <div className="filter">
        <div className="filter__container">
          <ButtonAction
            content="Todos"
            className="btn-action--filter"
            handleClick={handleAllVideos}
          />
          {labels?.map((label) => (
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
            filtersVideo.map((video) => <Card video={video} key={video.id} />)}
        </div>
      ) : (
        <div className="card__container">
          {videos &&
            videos.map((video) => <Card key={video.id} video={video} />)}
          <button type="button" onClick={() => setPage(page - 1)}>
            Previous
          </button>
          <button type="button" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default VideoGrid;

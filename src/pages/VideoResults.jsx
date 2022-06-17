import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import { fetchFilterVideos } from '../store/reducers/Video.actionCreators';

const VideoResults = () => {
  const location = useLocation();
  const searchInput = location.state;

  const { filtersVideo } = useSelector((state) => state.VideoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilterVideos(searchInput));
  }, [searchInput, dispatch]);

  return (
    filtersVideo && (
      <div className="videofilter__wrapper">
        {filtersVideo.map((filtervideo) => (
          <Card
            key={filtervideo.id}
            video={filtervideo}
            className="videofilter__container"
            isSearch
          />
        ))}
      </div>
    )
  );
};

export default VideoResults;

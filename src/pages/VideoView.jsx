import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '@mantine/core';

import VideoList from '../components/VideoList';
import VideoComments from '../components/VideoComments';
import {
  fetchAllVideos,
  fetchVideoDetail,
  getVideoComments,
  resetState,
} from '../store/reducers/Video.actionCreators';
import EmbeddedVideo from '../components/EmbeddedVideo';

const VideoView = () => {
  const { loading } = useSelector((state) => state.VideoReducer);
  const dispatch = useDispatch();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideoDetail(videoId));
    dispatch(getVideoComments(videoId));
    dispatch(fetchAllVideos());
  }, [videoId, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <Loader color="red" size={100} />
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="videoview">
      <div className="videoview__container">
        <div className="videoview__content">
          <div className="videoview__video">
            <EmbeddedVideo />
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

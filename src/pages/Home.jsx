import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '@mantine/core';

import VideoGrid from '../components/VideoGrid';
import { fetchLabels } from '../store/reducers/Layout.actionCreator';
import { fetchAllVideos } from '../store/reducers/Video.actionCreators';

function Home() {
  const { loading } = useSelector((state) => state.VideoReducer);
  const dispatch = useDispatch();
  const initialLoading = useRef(false);
  useEffect(() => {
    if (!initialLoading.current) {
      dispatch(fetchAllVideos());
      dispatch(fetchLabels());
      initialLoading.current = true;
    }
  }, [dispatch, initialLoading]);

  if (loading) {
    return (
      <div className="loading">
        <Loader color="red" size={100} />
        <h2>Loading...</h2>
      </div>
    );
  }

  return <VideoGrid />;
}

export default Home;

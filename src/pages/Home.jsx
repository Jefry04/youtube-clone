import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import VideoGrid from '../components/VideoGrid';
import { fetchLabels } from '../store/reducers/Layout.actionCreator';
import { fetchAllVideos } from '../store/reducers/Video.actionCreators';

function Home() {
  const dispatch = useDispatch();
  const initialLoading = useRef(false);
  useEffect(() => {
    if (!initialLoading.current) {
      dispatch(fetchAllVideos());
      dispatch(fetchLabels());
      initialLoading.current = true;
    }
  }, [dispatch, initialLoading]);

  return <VideoGrid />;
}

export default Home;

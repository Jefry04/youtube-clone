import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import VideoGrid from '../components/VideoGrid';
import { fetchLabels } from '../store/reducers/Layout.reducer';
import { fetchAllVideos } from '../store/reducers/Video.actionCreators';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllVideos());
    dispatch(fetchLabels());
  }, [dispatch]);

  return <VideoGrid />;
}

export default Home;

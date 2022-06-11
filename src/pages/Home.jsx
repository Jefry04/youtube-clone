import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import VideoGrid from '../components/VideoGrid';
import { fetchAllVideos } from '../store/reducers/Video.reducer';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllVideos());
  }, [dispatch]);

  return <VideoGrid />;
}

export default Home;

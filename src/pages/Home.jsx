import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '@mantine/core';

import VideoGrid from '../components/VideoGrid';
import { fetchLabels } from '../store/reducers/Layout.actionCreator';
import { fetchAllVideos } from '../store/reducers/Video.actionCreators';

function Home() {
  const [page, setPage] = useState(1);
  const { loading } = useSelector((state) => state.VideoReducer);
  const dispatch = useDispatch();
  const initialLoading = useRef(false);

  useEffect(() => {
    dispatch(fetchAllVideos(page, 12));
    dispatch(fetchLabels());
  }, [dispatch, initialLoading, page]);

  if (loading) {
    return (
      <div className="loading">
        <Loader color="red" size={100} />
        <h2>Loading...</h2>
      </div>
    );
  }

  return <VideoGrid page={page} setPage={setPage} />;
}

export default Home;

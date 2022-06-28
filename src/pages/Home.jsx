import React, { useEffect, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import VideoGrid from '../components/VideoGrid';
import { fetchLabels } from '../store/reducers/Layout.actionCreator';
import { fetchAllVideos } from '../store/reducers/Video.actionCreators';

function Home() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const initialLoading = useRef(false);

  useEffect(() => {
    dispatch(fetchAllVideos(page, 12));
    dispatch(fetchLabels());
  }, [dispatch, initialLoading, page]);

  return <VideoGrid page={page} setPage={setPage} />;
}

export default Home;

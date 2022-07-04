import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '@mantine/core';

import VideoGrid from '../components/VideoGrid';
import { fetchLabels } from '../store/reducers/Layout.actionCreator';
import { fetchAllVideos } from '../store/reducers/Video.actionCreators';
import SkeletonElement from '../components/SkeletonElement';
import ButtonAction from '../components/ButtonAction';

function Home() {
  const [page, setPage] = useState(1);
  const { loading } = useSelector((state) => state.VideoReducer);
  const dispatch = useDispatch();
  const initialLoading = useRef(false);

  useEffect(() => {
    dispatch(fetchAllVideos(page, 12));
    dispatch(fetchLabels());
  }, [dispatch, initialLoading, page]);

  return loading === true ? (
    <>
      <div className="filter">
        <div className="filter__container">
          <ButtonAction content="Todos" className="btn-action--filter" />
        </div>
      </div>
      <div className="card__container">
        {[...Array(12).keys()].map((n) => (
          <SkeletonElement key={n} />
        ))}
      </div>
    </>
  ) : (
    <VideoGrid page={page} setPage={setPage} />
  );
}

export default Home;

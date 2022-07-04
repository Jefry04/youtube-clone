/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import SkeletonElement from '../components/SkeletonElement';
import {
  fetchFilterVideos,
  resetState,
} from '../store/reducers/Video.actionCreators';

const BestVideos = () => {
  const { labelName } = useParams();

  const { filtersVideo, loading } = useSelector((state) => state.VideoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilterVideos(labelName));

    return () => {
      dispatch(resetState());
    };
  }, [labelName, dispatch]);

  return (
    <div>
      {loading && (
        <div className="card__container">
          {[...Array(12).keys()].map((n) => (
            <SkeletonElement key={n} />
          ))}
        </div>
      )}
      {filtersVideo ? (
        <div className="card__container">
          {filtersVideo.map((filtervideo) => (
            <Card
              key={filtervideo._id}
              video={filtervideo}
              className="videofilter__container"
              isSearch
            />
          ))}
        </div>
      ) : (
        <div className="card__container">
          No se encontraron videos de: {labelName}
        </div>
      )}
    </div>
  );
};

export default BestVideos;

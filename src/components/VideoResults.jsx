import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchFilterVideos } from '../store/reducers/Video.reducer';

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
      <div>
        <ul> Encontramos los videos de la barra debusqueda:</ul>
        {filtersVideo.map((video) => (
          <li>{video.title}</li>
        ))}
      </div>
    )
  );
};

export default VideoResults;

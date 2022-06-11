import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Cards from './Cards';
import ButtonAction from './ButtonAction';
import { fetchAllVideos } from '../store/reducers/Video.reducer';

const fetchData = async () => {
  try {
    const response = await axios.get('/mocks/data.json');
    return response.data;
  } catch (error) {
    return error;
  }
};

const fetchFilters = async () => {
  try {
    const response = await axios.get('/mocks/filters.json');
    return response.data;
  } catch (error) {
    return error;
  }
};

function VideoGrid() {
  const [filtersName, setFilterName] = useState([]);

  useEffect(() => {
    fetchFilters().then((response) => setFilterName(response));
  }, []);

  return (
    <>
      <div className="filter">
        <div className="filter__container">
          {filtersName.map((filter) => (
            <ButtonAction
              key={filter.id}
              content={filter.filterName}
              className="btn-action--filter"
            />
          ))}
        </div>
      </div>
      <Cards className="card__container" />
    </>
  );
}

export default VideoGrid;

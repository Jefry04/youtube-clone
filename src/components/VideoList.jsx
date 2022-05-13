import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import BottonFilters from './BottonFilters';

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

function VideoList() {
  const [cardData, setCardData] = useState([]);
  const [filtersName, setFilterName] = useState([]);

  useEffect(() => {
    fetchData().then((response) => setCardData(response));
  }, []);

  useEffect(() => {
    fetchFilters().then((response) => setFilterName(response));
  }, []);

  return (
    <>
      <BottonFilters filtersName={filtersName} />
      <Cards data={cardData} />
    </>
  );
}

export default VideoList;

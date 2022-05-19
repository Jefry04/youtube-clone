import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const fetchData = async () => {
  try {
    const response = await axios.get('/mocks/data.json');
    return response.data;
  } catch (error) {
    return error;
  }
};

function VideoList() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchData().then((response) => setCardData(response));
  }, []);

  return <Cards data={cardData} className="card__container-row" />;
}

export default VideoList;

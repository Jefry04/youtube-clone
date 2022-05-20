import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EmbeddedVideo from './EmbeddedVideo';

const fetchData = async () => {
  try {
    const response = await axios.get('/mocks/data.json');
    return response.data;
  } catch (error) {
    return error;
  }
};

const Video = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchData().then((response) => setVideoData(response));
  }, []);

  return (
    <EmbeddedVideo
      data={videoData[1]}
      subscribers="334,000 suscriptiores"
      descriptions="Improve your VS Code workflow by using the tips and tricks and keyboard shortcuts you'll learn in this video. These shortcuts will save you time and significantly improve your coding speed and efficiency! "
    />
  );
};

export default Video;

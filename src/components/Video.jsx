import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  const { videoId } = useParams();

  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchData().then((response) => setVideoData(response));
  }, []);
  const videoDetails = videoData.find((video) => video.videoSrc === videoId);

  return (
    <EmbeddedVideo
      data={videoDetails}
      subscribers="334,000 suscriptiores"
      descriptions="Improve your VS Code workflow by using the tips and tricks and keyboard shortcuts you'll learn in this video. These shortcuts will save you time and significantly improve your coding speed and efficiency! "
    />
  );
};

export default Video;

/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Avatar from './Avatar';

const Card = ({ video, showAvatar = true }) => {
  const views = video.visits ? video.visits?.length : 0;
  return (
    <Link to={`/videoview/${video._id}`} className="card">
      <header className="card__header">
        <div className="card__video">
          <ReactPlayer
            url={video.videoUrl}
            light={video.imageUrl}
            height="100%"
            width="100%"
          />
        </div>
      </header>
      <div className="card__body">
        {showAvatar && (
          <Avatar src={video?.user?.avatarUrl} alt={video?.user.fullName} />
        )}
        <div className="card__text">
          <h3>{video?.title}</h3>
          <div className="card__name">
            <span id="name">{video?.user?.firstName}</span>
          </div>
          <span>{`Visitas a este video ${views}`}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;

/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Card = ({ video, className, isSearch }) => {
  const views = Math.round(video.visits?.length / 2);
  return (
    <div className={`${className}`}>
      <Link to={`/videoview/${video._id}`} className="card__link">
        <div className="card" key={video._id}>
          <header className="card__video">
            <ReactPlayer
              url={video.videoUrl}
              light={video.imageUrl}
              height="100%"
              width="100%"
            />
          </header>
          {isSearch ? (
            <div className="card__body">
              <h3>{video?.title}</h3>
              <span>{`Visitas a este video ${views}`}</span>
              <div>
                <img src={video?.user?.avatarUrl} alt="perfil" />
                <span>{video?.user?.firstName}</span>
              </div>
              <p>{video.description}</p>
            </div>
          ) : (
            <div className="card__body">
              <div className="card__avatar">
                <img src={video?.user?.avatarUrl} alt="perfil" />
              </div>
              <div className="card__text">
                <h3>{video?.title}</h3>
                <div className="card__name">
                  <span id="name">{video?.user?.firstName}</span>
                </div>
                <span>{`Visitas a este video ${views}`}</span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;

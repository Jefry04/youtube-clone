/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Cards = ({ data = [], className }) => {
  const navigate = useNavigate();

  return (
    <div className={`${className}`}>
      {data?.map((user) => (
        <Link key={user.id} to={`videoview/${user.id}`} className="card__link">
          <div className="card" key={user.id}>
            <header className="card__video">
              <ReactPlayer
                url={user.videoSrc}
                light={user.imagePreview}
                height="100%"
                width="100%"
              />
            </header>
            <div className="card__body">
              <div className="card__avatar">
                <img
                  src={require(`../assets/images/${user.avatarSrc}.png`)}
                  alt="perfil"
                />
              </div>
              <div className="card__text">
                <h3>{user.title}</h3>
                <div className="card__name">
                  <span id="name">{user.name}</span>
                  <img
                    src={require(`../assets/images/${user.checkSrc}.png`)}
                    alt="vector"
                  />
                </div>
                <span>{user.visitas}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;

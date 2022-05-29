/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ data = [], className }) => {
  return (
    <div className={`${className}`}>
      {data?.map((user) => (
        <Link
          key={user.id}
          to={`videoview/${user.videoSrc}`}
          className="card__link"
        >
          <div className="card" key={user.id}>
            <header className="card__video">
              <iframe
                src={`https://www.youtube.com/embed/${user.videoSrc}`}
                title="video"
                width="100%"
                allowFullScreen
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

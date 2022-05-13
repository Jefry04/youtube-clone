/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';

const Cards = ({ data = [] }) => {
  return (
    <div className="card__container">
      {data?.map((user) => (
        <div className="card" key={user.id}>
          <header className="card__video">
            <img
              src={require(`../assets/images/${user.videoSrc}.png`)}
              alt="video"
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
      ))}
    </div>
  );
};

export default Cards;

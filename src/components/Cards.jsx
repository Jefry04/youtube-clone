/* eslint-disable global-require */
import React from 'react';
import '../styles/components/Cards.scss';

// eslint-disable-next-line no-unused-vars
const Cards = ({ data = [] }) => {
  return (
    <div className="card__container">
      {data.map((user) => (
        <div className="card">
          <header className="card__video">
            <img
              src={require('../images/video5.png')}
              alt="video"
              width="100%"
            />
          </header>
          <div className="card__body">
            <div className="card__avatar">
              <img src={require('../images/perfil3.png')} alt="perfil" />
            </div>
            <div className="card__text">
              <h3>{user.title}</h3>
              <div className="card__name">
                <span id="name">MichelleVar</span>
                <img src={require('../images/Vector.png')} alt="vector" />
              </div>
              <span>1 M de vistas &middot; en 15 horas</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

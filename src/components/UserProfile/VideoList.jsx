import React from 'react';
import '../../styles/components/UserProfile/VideoList.scss';

export default function VideoList({ videos, loading }) {
  return (
    <div className="user-profile__videos">
      <h2 className="user-profile__videos__title">Listado de videos</h2>
      {loading && (
        <p className="user-profile__videos__loading">Recuperando videos...</p>
      )}

      {!loading && (
        <ul className="user-profile__videos__list">
          {videos.map((item) => (
            <li className="user-profile__videos__list__item" key={item.id}>
              <div className="user-profile__video">
                <figure className="user-profile__video__fig">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="user-profile__video__img"
                  />
                </figure>
                <div className="user-profile__video__content">
                  <h3 className="user-profile__video__title">{item.title}</h3>
                  <p className="user-profile__video__info">
                    Visitas: <span className="bold">{item.visits?.length}</span>
                  </p>
                  <p className="user-profile__video__info">
                    Comentarios:{' '}
                    <span className="bold">{item.comments?.length}</span>
                  </p>
                  <p className="user-profile__video__info">
                    Likes: <span className="bold">{item.likes?.length}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

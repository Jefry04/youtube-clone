import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';

const Cards = ({ className }) => {
  const { videos, loading } = useSelector((state) => state.VideoReducer);

  return (
    <div className={`${className}`}>
      {loading ? (
        <div> cargando</div>
      ) : (
        videos?.map((video) => (
          <Link
            key={video.id}
            to={`/videoview/${video.id}`}
            className="card__link"
          >
            <div className="card" key={video.id}>
              <header className="card__video">
                <ReactPlayer
                  url={video.videoUrl}
                  light={video.imageUrl}
                  height="100%"
                  width="100%"
                />
              </header>
              <div className="card__body">
                <div className="card__avatar">
                  <img src={video.userId.avatarUrl} alt="perfil" />
                </div>
                <div className="card__text">
                  <h3>{video.title}</h3>
                  <div className="card__name">
                    <span id="name">{video.userId.firstName}</span>
                  </div>
                  <span>1 M de visitas en 15 horas</span>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Cards;

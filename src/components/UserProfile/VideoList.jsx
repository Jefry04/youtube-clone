import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Eye, Message, ThumbUp } from 'tabler-icons-react';
import '../../styles/components/UserProfile/VideoList.scss';
import SkeletonElement from '../SkeletonElement';

export default function VideoList({ videos, loading, getVideos }) {
  const handleClick = (video) => {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Está acción no puede revertirse y eleminará el video de forma permanente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, Eliminalo!',
      cancelButtonText: 'Cancelar',
      backdrop: true,
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          const res = await axios.delete(`/videos/${video.id}`);
          return res.data;
        } catch (error) {
          Swal.showValidationMessage(`La petición falló.`);
        }
        return null;
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        getVideos();
        Swal.fire({
          title: `El video ${video.title} fue eliminado`,
          imageUrl: video.imageUrl,
        });
      }
    });
  };
  return (
    <div className="user-profile__videos">
      <h2 className="user-profile__videos__title">Listado de videos</h2>
      {loading && (
        <div className="card__container">
          {[...Array(8).keys()].map((n) => (
            <SkeletonElement key={n} />
          ))}
        </div>
        // <p className="user-profile__videos__loading">Recuperando videos...</p>
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
                  <Link
                    to={`/watchvideo/${item.id}`}
                    className="user-profile__video__title"
                  >
                    <h3 className="user-profile__video__title">{item.title}</h3>
                  </Link>
                  <p className="user-profile__video__description">
                    {item.description}
                  </p>
                  <div className="user-profile__video__info">
                    <div className="user-profile__video__info__item">
                      <Eye size={20} />
                      <span className="bold">{item.visits}</span>
                    </div>
                    <div className="user-profile__video__info__item">
                      <Message size={20} />
                      <span className="bold">{item.comments?.length}</span>
                    </div>
                    <div className="user-profile__video__info__item">
                      <ThumbUp size={20} />
                      <span className="bold">{item.likes?.length}</span>
                    </div>
                  </div>
                </div>

                <div className="user-profile__video__action">
                  <button
                    type="button"
                    className="user-profile__video__delete"
                    onClick={() => handleClick(item)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

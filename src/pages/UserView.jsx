/* eslint-disable jsx-a11y/img-redundant-alt */
import { React } from 'react';

import { useSelector } from 'react-redux';

import ButtonAction from '../components/ButtonAction';
import '../styles/pages/UserView.scss';
import pic from '../assets/images/perfil5.png';

function UserView() {
  const { user } = useSelector((state) => state.AuthReducer);

  return (
    user && (
      <div className="page">
        <div className="page__headerview">
          <div className="header__container">
            <div className="container__profile">
              <div className="profile__img">
                <img src={pic} alt="Perfil image" />
              </div>
              <div className="profile__info">
                <div className="info__data">
                  <div className="data__user">
                    <p>video name</p>
                  </div>
                  <div className="data__subscriber">
                    <p>200 suscriptores</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container__button">
              <ButtonAction
                className="btn-action--videoup"
                content="SUBIR VIDEO"
              />
            </div>
          </div>
        </div>
        <div className="header__tabsContainer">
          <ButtonAction
            className="btn-action--tabsContainer"
            content="INICIO"
          />
          <ButtonAction
            className="btn-action--tabsContainer"
            content="VIDEOS"
          />
        </div>
        <div className="page__grillaVideos">
          <div className="grillaVideos__videosperfil">
            Perfil de: {user.name}
          </div>
        </div>
      </div>
    )
  );
}

export default UserView;

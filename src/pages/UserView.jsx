/* eslint-disable jsx-a11y/img-redundant-alt */
import { React, useState, useEffect } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import ButtonAction from '../components/ButtonAction';
import '../styles/pages/UserView.scss';
import pic from '../assets/images/perfil5.png';
import { getUerData } from '../store/reducers/User.reducer';

function UserView() {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    setLoading(true);
    dispatch(getUerData(token));
    setLoading(false);
  }, [token, dispatch]);

  if (loading === true) {
    return (
      <div className="page__headerview">
        <h2> Loding...</h2>
      </div>
    );
  }

  return (
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
                  <p>{videoData.name}</p>
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
        <ButtonAction className="btn-action--tabsContainer" content="INICIO" />
        <ButtonAction className="btn-action--tabsContainer" content="VIDEOS" />
      </div>
      <div className="page__grillaVideos">
        <div className="grillaVideos__videosperfil">
          Perfil de: {user.firstName}
          {/* <iframe
            src={`https://www.youtube.com/embed/${videoData.videoSrc}`}
            title="video"
            width="100%"
            height="100%"
          />
          <iframe
            src="https://www.youtube.com/embed/afDXVnDnBf4"
            title="video"
            width="100%"
            height="100%"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default UserView;

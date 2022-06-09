/* eslint-disable jsx-a11y/img-redundant-alt */
import { React } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonAction from '../components/ButtonAction';
import '../styles/pages/UserView.scss';
import pic from '../assets/images/perfil5.png';
import PublicModal from '../components/PublicModal';
import VideoUploadForm from '../components/VideoUploadForm';
import { showFormAction } from '../store/reducers/Modals.reducer';

function UserView() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthReducer);
  const { showForm } = useSelector((state) => state.ModalsReducer);

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
                handleClick={() => dispatch(showFormAction())}
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
        <PublicModal
          opened={showForm}
          onClose={() => dispatch(showFormAction())}
        >
          <VideoUploadForm />
        </PublicModal>
      </div>
    )
  );
}

export default UserView;

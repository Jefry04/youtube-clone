/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

import ButtonAction from './ButtonAction';
import '../styles/components/EmbeddedVideo.scss';
import LikeIcon from '../assets/icons/LikeIcon';
import ShareIcon from '../assets/icons/ShareIcon';
import { actionSearchData } from '../store/reducers/Video.actionCreators';
import { showRegisterForm } from '../store/reducers/Modals.reducer';

const EmbeddedVideo = () => {
  const { videoDetail } = useSelector((state) => state.VideoReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (labelName) => {
    dispatch(actionSearchData(labelName));
    navigate('/videos/results', {
      state: labelName,
    });
  };
  return (
    videoDetail && (
      <div className="container__userandvideo">
        <div className="userandvideo__videowrapper">
          <ReactPlayer
            className="videowrapper__video"
            url={videoDetail.videoUrl}
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div className="userandvideo__labels">
          {videoDetail?.labels?.map((label) => (
            <button
              type="button"
              onClick={() => handleClick(label.name)}
              key={label._id}
            >
              #{label.name}
            </button>
          ))}
        </div>

        <div className="userandvideo__primaryinfo">
          <div className="primaryinfo__title">
            <h2>{videoDetail.title}</h2>
          </div>
          <div className="primaryinfo__scope">
            <div className="scope__views">1 M de visitas en 15 horas</div>
            <div className="scope__buttons">
              <ButtonAction
                className="btn-action--like"
                prependIcon={<LikeIcon />}
              />
              <ButtonAction
                className="btn-action--toshare"
                prependIcon={<ShareIcon />}
              />
            </div>
          </div>
        </div>
        <div className="userandvideo__secundaryinfo">
          <div className="secundaryinfo__scope">
            <div className="scope__user">
              <div className="user__image">
                <img src={videoDetail?.user?.avatarUrl} alt="perfil" />
              </div>
              <div className="user__profile">
                <p className="profile__name">{videoDetail?.user?.fullName}</p>
                <p className="profile__subscribers">334,000 suscriptiores</p>
              </div>
            </div>
            <div className="profile__buttons">
              <ButtonAction
                className="btn-action--join"
                content="UNIRSE"
                handleClick={() => dispatch(showRegisterForm())}
              />
              <ButtonAction
                className="btn-action--subscription"
                content="SUSCRIBIRSE"
              />
            </div>
          </div>
          <div className="secundaryinfo__description">
            {videoDetail.descriptions}
          </div>
        </div>
      </div>
    )
  );
};

export default EmbeddedVideo;

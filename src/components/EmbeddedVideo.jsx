/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import ButtonAction from './ButtonAction';
import '../styles/components/EmbeddedVideo.scss';
import LikeIcon from '../assets/icons/LikeIcon';
import ShareIcon from '../assets/icons/ShareIcon';

const EmbeddedVideo = (props) => {
  const { data = [], subscribers, descriptions } = props;
  return (
    <div className="container__userandvideo">
      <div className="userandvideo__video">
        <iframe
          src={`https://www.youtube.com/embed/${data.videoSrc}`}
          title="video"
          width="100%"
        />
      </div>
      <div className="userandvideo__primaryinfo">
        <div className="primaryinfo__title">
          <h2>{data.title}</h2>
        </div>
        <div className="primaryinfo__scope">
          <div className="scope__views">{data.visitas}</div>
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
              <img
                src={require(`../assets/images/${data.avatarSrc}.png`)}
                alt="perfil"
              />
            </div>
            <div className="user__profile">
              <p className="profile__name">{data.name}</p>
              <p className="profile__subscribers">{subscribers}</p>
            </div>
          </div>
          <div className="profile__buttons">
            <ButtonAction className="btn-action--join" content="UNIRSE" />
            <ButtonAction
              className="btn-action--subscription"
              content="SUSCRIBIRSE"
            />
          </div>
        </div>
        <div className="secundaryinfo__description">{descriptions}</div>
      </div>
    </div>
  );
};

export default EmbeddedVideo;

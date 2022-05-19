import React from 'react';
import ButtonAction from './ButtonAction';

const EmbeddedVideo = (props) => {
  const { video, title, views, profileName, subscribers, descriptions } = props;
  return (
    <div className="container__userandvideo">
      <div className="userandvideo__video">{video}</div>
      <div className="userandvideo__primaryinfo">
        <div className="primaryinfo__title">{title}</div>
        <div className="primaryinfo__scope">
          <div className="scope__views">{views}</div>
          <ButtonAction className="btn-action--like" prependIcon={null} />
          <ButtonAction className="btn-action--toshare" prependIcon={null} />
        </div>
      </div>
      <div className="userandvideo__secundaryinfo">
        <div className="secundaryinfo__scope">
          <div className="scope__user">
            <div className="user__image">sdfs</div>
            <div className="user__profile">
              <p className="profile__name">{profileName}</p>
              <p className="profile__subscribers">{subscribers}</p>
            </div>
          </div>
          <ButtonAction
            className="btn-action--subscription"
            content="SUSCRIBIRSE"
          />
        </div>
        <div className="secundaryinfo__description">{descriptions}</div>
      </div>
    </div>
  );
};

export default EmbeddedVideo;

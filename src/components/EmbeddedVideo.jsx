/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import ButtonAction from './ButtonAction';
import '../styles/components/EmbeddedVideo.scss';
import LikeIcon from '../assets/icons/LikeIcon';
import ShareIcon from '../assets/icons/ShareIcon';
import { actionSearchData } from '../store/reducers/Video.reducer';
import { showRegisterForm } from '../store/reducers/Modals.reducer';
import { getLikeData, getLikeDatarest } from '../store/reducers/Auth.reducer';
import LikeIconOn from '../assets/icons/LikeIconOn';

const EmbeddedVideo = () => {
  const { videoDetail, videos } = useSelector((state) => state.VideoReducer);
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [stateLike, setStateLike] = useState({
    like: false,
    numerLike: 0,
  });
  console.log('este es el USER', user);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (token !== null) {
      if (stateLike.like === true) {
        setStateLike({ like: false, numerLike: stateLike.numerLike - 1 });
        dispatch(getLikeDatarest({ videoId }));
        console.log(stateLike);
      } else {
        setStateLike({ like: true, numerLike: stateLike.numerLike + 1 });
        dispatch(getLikeData({ videoId }));
        console.log(stateLike);
      }
    }
  };

  const handleClick = (labelName) => {
    dispatch(actionSearchData(labelName));
    navigate('/videos/results', {
      state: labelName,
    });
  };
  const initialLoading = useRef(false);
  useEffect(() => {
    if (!initialLoading.current) {
      const sendData = () => {
        try {
          if (token === null) {
            setStateLike({ like: false, numerLike: videoDetail.likes });
          } else if (user && videoDetail) {
            const equal = user.likes?.filter((element) =>
              videoDetail.likesIds?.some((like) => like === element)
            );
            if (equal?.length !== 0 || equal !== undefined) {
              setStateLike({ like: true, numerLike: videoDetail.likes });
              if (videoDetail.likes === 0 || equal.length === 0) {
                setStateLike({ numerLike: videoDetail.likes, like: false });
              }
            } else if (videoDetail) {
              setStateLike({ ...stateLike, numerLike: videoDetail.likes });
            }
          } else {
            console.log('error en el iff de use efect');
          }
        } catch (error) {
          console.log('error en el useEffect', error);
        }
      };
      sendData();
      initialLoading.current = true;
    }
  }, [user, videoDetail, initialLoading]);

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
              <p>{stateLike.numerLike}</p>
              <div className="buttons__like">
                <ButtonAction
                  className="btn-action--like"
                  prependIcon={stateLike.like ? <LikeIconOn /> : <LikeIcon />}
                  type="submit"
                  np
                  handleClick={handleSubmit}
                />
              </div>
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
                <img src={videos?.user?.avatarUrl} alt="perfil" />
              </div>
              <div className="user__profile">
                <p className="profile__name">
                  {videoDetail?.userId?.firstName}
                </p>
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

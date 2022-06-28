/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import axios from 'axios';
import { Tabs } from '@mantine/core';
import alertify from 'alertifyjs';

import { useDispatch, useSelector } from 'react-redux';
import { showFormAction } from '../store/reducers/Modals.actionCreator';
import { hiddeChangePasswordForm } from '../store/reducers/ChangePassword.actionCreator';

import PublicModal from '../components/PublicModal';
import ChangePassword from '../components/ChangePassword';
import VideoUploadForm from '../components/VideoUploadForm';
import ProfileHeader from '../components/UserProfile/Header';
import ProfileForm from '../components/UserProfile/ProfileForm';
import VideoList from '../components/UserProfile/VideoList';

import '../styles/pages/UserProfile.scss';

function UserView() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthReducer);
  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const { showForm } = useSelector((state) => state.ModalsReducer);
  const { showingChangePasswordForm } = useSelector(
    (state) => state.ChangePasswordReducer
  );

  const getVideos = async () => {
    const backUri = process.env.REACT_APP_BACKEND_URI;
    const token = localStorage.getItem('token');
    const url = `${backUri}/user/profile/videos`;
    setLoadingVideos(true);

    try {
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setVideos(res.data.videos);
    } catch (error) {
      alertify.notify('No se pudo recuperar el listado de videos.', 'error', 5);
    } finally {
      setLoadingVideos(false);
    }
  };

  const handleTabChange = (tabIndex, tabKey) => {
    if (tabKey === 'videos') {
      getVideos();
    }
  };
  return (
    user && (
      <div className="user-profile">
        <ProfileHeader />

        <Tabs variant="outline" tabPadding="sm" onTabChange={handleTabChange}>
          <Tabs.Tab label="Perfil" tabKey="profile">
            <ProfileForm user={user} />
          </Tabs.Tab>
          <Tabs.Tab label="Videos" tabKey="videos">
            <VideoList videos={videos} loading={loadingVideos} />
          </Tabs.Tab>
          <Tabs.Tab label="Comentarios" tabKey="comments">
            Comentarios del usuario
          </Tabs.Tab>
        </Tabs>

        <PublicModal
          opened={showForm}
          onClose={() => dispatch(showFormAction())}
          size="50%"
        >
          <VideoUploadForm />
        </PublicModal>
        <PublicModal
          opened={showingChangePasswordForm}
          onClose={() => dispatch(hiddeChangePasswordForm())}
          size="50%"
        >
          <ChangePassword />
        </PublicModal>
      </div>
    )
  );
}

export default UserView;

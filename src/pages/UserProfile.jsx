/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import axios from 'axios';
import { Tabs } from '@mantine/core';
import { toast } from 'react-toastify';
import { useMediaQuery } from '@mantine/hooks';

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
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const { user } = useSelector((state) => state.AuthReducer);
  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const { showForm } = useSelector((state) => state.ModalsReducer);
  const { showingChangePasswordForm } = useSelector(
    (state) => state.ChangePasswordReducer
  );

  const getVideos = async () => {
    const url = `/user/profile/videos`;
    setLoadingVideos(true);

    try {
      const res = await axios.get(url);
      setVideos(res.data.videos);
    } catch (error) {
      toast.error('No se pudo recuperar el listado de videos.');
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
          {/* <Tabs.Tab label="Comentarios" tabKey="comments">
            Comentarios del usuario
          </Tabs.Tab> */}
        </Tabs>

        <PublicModal
          opened={showForm}
          onClose={() => dispatch(showFormAction())}
          size={largeScreen ? '50%' : '90%'}
        >
          <VideoUploadForm />
        </PublicModal>

        <PublicModal
          opened={showingChangePasswordForm}
          onClose={() => dispatch(hiddeChangePasswordForm())}
          size={largeScreen ? '50%' : '90%'}
        >
          <ChangePassword />
        </PublicModal>
      </div>
    )
  );
}

export default UserView;

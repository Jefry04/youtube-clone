/* eslint-disable jsx-a11y/img-redundant-alt */
import { React } from 'react';
import { Tabs } from '@mantine/core';

import { useDispatch, useSelector } from 'react-redux';
import { showFormAction } from '../store/reducers/Modals.actionCreator';
import { hiddeChangePasswordForm } from '../store/reducers/ChangePassword.actionCreator';

import PublicModal from '../components/PublicModal';
import ChangePassword from '../components/ChangePassword';
import VideoUploadForm from '../components/VideoUploadForm';
import ProfileHeader from '../components/UserProfile/Header';
import ProfileForm from '../components/UserProfile/ProfileForm';

import '../styles/pages/UserProfile.scss';

function UserView() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthReducer);
  const { showForm } = useSelector((state) => state.ModalsReducer);
  const { showingChangePasswordForm } = useSelector(
    (state) => state.ChangePasswordReducer
  );
  return (
    user && (
      <div className="user-profile">
        <ProfileHeader />

        <Tabs variant="outline" tabPadding="sm">
          <Tabs.Tab label="Perfil">
            <ProfileForm user={user} />
          </Tabs.Tab>
          <Tabs.Tab label="Videos">Videos del usuario</Tabs.Tab>
          <Tabs.Tab label="Comentarios">Comentarios del usuario</Tabs.Tab>
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

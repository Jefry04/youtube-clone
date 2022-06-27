import React from 'react';
import '../../styles/components/UserProfile/ProfileForm.scss';
import UpdateAvatarForm from './UpdateAvatarForm';
import UpdateUserForm from './UpdateUserForm';

export default function ProfileForm({ user }) {
  return (
    <div className="user-profile__form">
      <UpdateAvatarForm user={user} />
      <UpdateUserForm user={user} />
    </div>
  );
}

import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Progress } from '@mantine/core';
import '../../styles/components/UserProfile/UpdateAvatarForm.scss';
import { Trash } from 'tabler-icons-react';
import { updateUser } from '../../store/reducers/Auth.actionCreator';

import ButtonAction from '../ButtonAction';

export default function UpdateAvatarForm({ user }) {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarData, setAvatarData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [percentCompleted, setPercentCompleted] = useState(0);

  const avatarInput = useRef(null);
  const dispatch = useDispatch();

  const readFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileData = e.target.result.split(';')[0];
      const mimeType = fileData.substring(fileData.indexOf(':') + 1);
      const fileType = mimeType.split('/')[0];
      if (fileType === 'image') setAvatarPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (files) => {
    if (files.length > 0) {
      readFile(files[0]);
      setAvatarData(files[0]);
    }
  };

  const removeFile = () => {
    setAvatarData(null);
    setAvatarPreview(null);
    avatarInput.current.value = '';
  };

  const resetForm = () => {
    setAvatarData(null);
    setAvatarPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = `/user/update-avatar`;

    const data = new FormData();
    data.append('image', avatarData);

    try {
      setUploading(true);
      const res = await axios.put(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const completed = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setPercentCompleted(completed);
          if (completed === 100) {
            setUploading(false);
          }
        },
      });
      const { user: userUpdated } = res.data;

      dispatch(updateUser(userUpdated));

      resetForm();
      toast.info('¡Avatar Actualizado!');
    } catch (error) {
      toast.error('No se pudo actualizar el avatar.');
    } finally {
      setLoading(false);
    }
  };

  const removeAvatar = async () => {
    const url = `/user/remove-avatar`;
    setLoading(true);

    try {
      const res = await axios.delete(url);
      const { user: userUpdated } = res.data;

      dispatch(updateUser(userUpdated));
      resetForm();
      toast.success('¡Imagen de perfil eliminada!');
    } catch (error) {
      toast.error('No se pudo eliminar la imagen de perfil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="user-profile__avatar-form" onSubmit={handleSubmit}>
      <label htmlFor="userAvatar" className="user-profile__avatar-form__label">
        <figure className="user-profile__avatar-form__fig">
          <img
            src={avatarPreview || user.avatar}
            alt={user.name}
            className="user-profile__avatar-form__img"
          />
        </figure>
        <input
          type="file"
          name="userAvatar"
          id="userAvatar"
          className="hidden"
          title="User avatar"
          ref={avatarInput}
          onInput={(e) => handleChange(e.target.files)}
          disabled={loading}
        />
      </label>

      {avatarData && (
        <button
          className="user-profile__avatar-form__trash"
          type="button"
          onClick={removeFile}
        >
          <Trash size={24} strokeWidth={1} />
        </button>
      )}

      {uploading && (
        <div className="user-profile__loading">
          <Progress size="sm" value={percentCompleted} />
          <span>Cargando imagen...</span>
        </div>
      )}

      {loading && !uploading && (
        <div className="user-profile__loading">
          <span>Procesando solicitud...</span>
        </div>
      )}
      <div className="user-profile__avatar-form__actions">
        {user.hasAvatar && (
          <ButtonAction
            className="btn-action--profile btn-action--profile--delete"
            content="Eliminar"
            handleClick={removeAvatar}
            isDisabled={loading}
          />
        )}
        <ButtonAction
          className="btn-action--profile"
          content={loading ? 'Actualizando...' : 'Actualizar'}
          isDisabled={!avatarPreview || loading}
          isSubmit
        />
      </div>
    </form>
  );
}

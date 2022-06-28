import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es-do';

import { showChangePasswordForm } from '../../store/reducers/ChangePassword.actionCreator';
import { showFormAction } from '../../store/reducers/Modals.actionCreator';

import ButtonAction from '../ButtonAction';

import '../../styles/components/UserProfile/Header.scss';

dayjs.extend(relativeTime);
dayjs.locale('es-do');

export default function Header() {
  const { user } = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();
  return (
    <header className="user-profile__header">
      <div className="user-profile__header__info">
        <figure className="user-profile__header__fig">
          <img
            src={user.avatar}
            alt={user.name}
            className="user-profile__header__avatar"
          />
        </figure>
        <div className="user-profile__header__user-info">
          <h2 className="user-profile__user-name"> {user.name} </h2>
          <p className="user-profile__info">
            Registrado: {dayjs(user.createdAt).fromNow()}
          </p>
        </div>
      </div>
      <div className="user-profile__header__actions">
        <ButtonAction
          className="btn-action--profile"
          content="CAMBIAR CONTRASEÑA"
          handleClick={() => dispatch(showChangePasswordForm())}
        />
        <ButtonAction
          className="btn-action--profile"
          content="SUBIR VIDEO"
          handleClick={() => dispatch(showFormAction())}
        />
      </div>
    </header>
  );
}

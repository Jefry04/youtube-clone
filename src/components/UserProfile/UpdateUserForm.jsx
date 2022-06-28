import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import alertify from 'alertifyjs';
import '../../styles/components/UserProfile/UpdateUserForm.scss';
import { updateUser } from '../../store/reducers/Auth.actionCreator';

import ButtonAction from '../ButtonAction';

export default function UpdateUserForm({ user }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  const backUri = process.env.REACT_APP_BACKEND_URI;
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { firstName, lastName, email };
    const url = `${backUri}/user/profile/edit`;
    setLoading(true);

    try {
      const res = await axios.put(url, data, { headers });
      const { user: userUpdated } = res.data;
      dispatch(updateUser(userUpdated));
      alertify.notify('¡Información actualizada!', 'success', 5);
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        const { errors: validationErrors } = error.response.data.error;
        if (status === 406) {
          setErrors(validationErrors);
        }
        alertify.notify(
          'No se pudo actualizar la información, revisa el formulario.',
          'error',
          5
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="update-user-form" onSubmit={handleSubmit}>
      <header className="update-user-form__header">
        <h2 className="update-user-form__title">Información General</h2>
        <p className="update-user-form__paragraph">
          Formulario para la actualización de información general y correo.{' '}
          {firstName}
        </p>
      </header>
      <div className="update-user-form__body">
        {/* FirstName */}
        <div className="update-user-form__form-group">
          <label htmlFor="firstName" className="update-user-form__label">
            Nombres
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="update-user-form__input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            disabled={loading}
          />
          {errors?.firstName && (
            <p className="update-user-form__error">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* LastName */}
        <div className="update-user-form__form-group">
          <label htmlFor="lastName" className="update-user-form__label">
            Apellidos
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="update-user-form__input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={loading}
          />
          {errors?.lastName && (
            <p className="update-user-form__error">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="update-user-form__form-group">
          <label htmlFor="email" className="update-user-form__label">
            Correo
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="update-user-form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          {errors?.email && (
            <p className="update-user-form__error">{errors.email.message}</p>
          )}
        </div>
      </div>
      <footer className="update-user-form__footer">
        <ButtonAction
          className="btn-action--profile"
          content={loading ? 'Actualizando...' : 'Actualizar'}
          isSubmit
          isDisabled={loading}
          /* handleClick={() => dispatch(showFormAction())} */
        />
      </footer>
    </form>
  );
}

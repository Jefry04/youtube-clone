import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';

import {
  hiddeRegisterForm,
  hiddeLoginForm,
  hiddeRecoverPassword,
} from '../../store/reducers/Modals.actionCreator';

//  COMPONENTS
import Header from './Header';
import Sidebar from './Sidebar';
import MobileFooter from '../MobileFooter';
import PublicModal from '../PublicModal';
import Register from '../Register';
import Login from '../Login';
import '../../styles/components/Layout/Layout.scss';
import GetEmail from '../GetEmail';

function Layout(props) {
  const { children } = props;
  const { showingRegisterForm, showingLoginForm, showRecoverPassword } =
    useSelector(({ ModalsReducer }) => ModalsReducer);
  const largeScreen = useMediaQuery('(min-width: 1024px)');
  const dispatch = useDispatch();

  return (
    <div className="layout">
      <Header />
      <div className="layout__container">
        <Sidebar />
        <main className="layout__content">
          {children}
          <PublicModal
            opened={showingRegisterForm}
            onClose={() => dispatch(hiddeRegisterForm())}
          >
            <Register />
          </PublicModal>

          <PublicModal
            opened={showingLoginForm}
            onClose={() => dispatch(hiddeLoginForm())}
            size={largeScreen ? '50%' : '90%'}
          >
            <Login />
          </PublicModal>
          <PublicModal
            opened={showRecoverPassword}
            onClose={() => dispatch(hiddeRecoverPassword())}
          >
            <GetEmail />
          </PublicModal>
        </main>
      </div>
      <MobileFooter />
    </div>
  );
}

export default Layout;

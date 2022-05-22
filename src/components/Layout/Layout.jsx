import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  hiddeRegisterForm,
  hiddeLoginForm,
} from '../../store/reducers/Auth.reducer';

//  COMPONENTS
import Header from './Header';
import Sidebar from './Sidebar';
import MobileFooter from '../MobileFooter';
import PublicModal from '../PublicModal';
import Register from '../Register';
import Login from '../Login';
import '../../styles/components/Layout/Layout.scss';

function Layout(props) {
  const { children } = props;
  const { showingRegisterForm, showingLoginForm } = useSelector(
    ({ AuthReducer }) => AuthReducer
  );

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
          >
            <Login />
          </PublicModal>
        </main>
      </div>
      <MobileFooter />
    </div>
  );
}

export default Layout;

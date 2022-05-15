import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileFooter from '../MobileFooter';
import '../../styles/components/Layout/Layout.scss';

function Layout(props) {
  const { children } = props;

  return (
    <div className="layout">
      <Header />
      <div className="layout__container">
        <Sidebar />
        <main className="layout__content">{children}</main>
      </div>
      <MobileFooter />
    </div>
  );
}

export default Layout;

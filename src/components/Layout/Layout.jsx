import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileFooter from '../MobileFooter';

function Layout(props) {
  const { children } = props;

  return (
    <div className="relative">
      <Header />
      <div className="layout__container">
        <Sidebar />
        <main>{children}</main>
      </div>
      <MobileFooter />
    </div>
  );
}

export default Layout;

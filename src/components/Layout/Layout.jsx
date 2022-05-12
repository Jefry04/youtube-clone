import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileFooter from '../MobileFooter';

function Layout() {
  return (
    <div className="relative">
      <Header />
      <Sidebar />
      <MobileFooter />
    </div>
  );
}

export default Layout;

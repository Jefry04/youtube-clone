import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/login">LOGIN</Link>
    </nav>
  );
}

export default Header;

import React from 'react';

import notFound from '../assets/images/notFound.png';

const NotFound = () => {
  return (
    <div className="notfound__container">
      <img src={notFound} alt="no encontrado" />
      <p>Esta página no se encuentra disponible</p>
    </div>
  );
};

export default NotFound;

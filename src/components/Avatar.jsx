import React from 'react';
import '../styles/components/Avatar.scss';

export default function Avatar({ src, alt, width = 40 }) {
  return (
    <figure className="avatar">
      <img
        src={src}
        alt={alt}
        width={width}
        height={width}
        className="avatar__img"
        loading="lazy"
      />
    </figure>
  );
}

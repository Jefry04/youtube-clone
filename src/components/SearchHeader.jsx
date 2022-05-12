import React from 'react';
import '../styles/components/SearchHeader.scss';

function SearchHeader(props) {
  const { wordkey } = props;
  return <input className="search__input" type="text" placeholder={wordkey} />;
}

export default SearchHeader;

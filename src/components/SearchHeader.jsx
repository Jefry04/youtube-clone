import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { actionSearchData } from '../store/reducers/Video.actionCreators';
import '../styles/components/SearchHeader.scss';

function SearchHeader() {
  const [searchInput, setSearchInput] = useState('');
  const [showResetinputIcon, setShowResetinputIcon] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchInput.length > 0) {
      dispatch(actionSearchData(searchInput));
      navigate('videos/results', {
        state: searchInput,
      });
    }
    setShowResetinputIcon(true);
  };
  const handleClick = () => {
    setSearchInput('');
    setShowResetinputIcon(false);
  };
  return (
    <form onSubmit={handleSearch} className="search__form">
      <input
        data-cy="search-video"
        className="search__input"
        type="text"
        placeholder="Buscar video"
        onChange={onChange}
        value={searchInput}
        title="search video"
      />
      {showResetinputIcon && (
        <button type="button" className="search__append" onClick={handleClick}>
          X
        </button>
      )}
    </form>
  );
}

export default SearchHeader;

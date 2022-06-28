import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { actionSearchData } from '../store/reducers/Video.actionCreators';
import '../styles/components/SearchHeader.scss';

function SearchHeader(props) {
  const { wordkey } = props;
  const [searchInput, setSearchInput] = useState('');
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
    setSearchInput('');
  };

  return (
    <form onSubmit={handleSearch} className="search__form">
      <input
        className="search__input"
        type="text"
        placeholder={wordkey}
        onChange={onChange}
        value={searchInput}
      />
    </form>
  );
}

export default SearchHeader;

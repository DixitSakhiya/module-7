import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './tableSlice.js';

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
    </div>
  );
};

export default Search;

import {
  changeValueSearch,
  fetchFilterForNameCharacters,
} from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import React from 'react';

function Search() {
  const { valueSearch } = useAppSelector((state) => state.searchReducer);
  const dispatch = useAppDispatch();

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    dispatch(fetchFilterForNameCharacters(valueSearch));
  }

  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        type="search"
        value={valueSearch}
        onChange={(e) => dispatch(changeValueSearch(e.target.value))}
        className="search__input"
        placeholder="Enter name or race"
        name="search"
      ></input>
      <button className="btn btn_search">Search</button>
    </form>
  );
}
export default Search;

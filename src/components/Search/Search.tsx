import React, { useEffect, useRef, useState } from 'react';

function Search() {
  const [value, setValue] = useState('');
  const searchRef = useRef(value);
  useEffect(() => {
    searchRef.current = value;
  }, [value]);

  useEffect(() => {
    setValue(localStorage.getItem('searchValue') || '');
    return () => {
      localStorage.setItem('searchValue', searchRef.current);
    };
  }, []);

  return (
    <div className="search">
      <input
        type={'search'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search__input"
        placeholder="Start searching"
      ></input>
      <button className="btn btn_search">Search</button>
    </div>
  );
}
export default Search;

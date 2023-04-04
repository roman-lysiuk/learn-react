import { Character } from 'interfaces';

import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';

type SearchProps = {
  setSearchCharacterCards: Function;
  characterCards: Character[];
};

function Search(props: SearchProps) {
  const [value, setValue] = useState('');
  const searchRef = useRef(value);

  function onSubmit(event: SyntheticEvent) {
    event.preventDefault();
    searchCard(value);
  }

  useEffect(() => {
    searchRef.current = value;
  }, [value]);

  useEffect(() => {
    setValue(localStorage.getItem('searchValue') || '');
    return () => {
      localStorage.setItem('searchValue', searchRef.current);
    };
  }, []);

  function searchCard(search: string) {
    const characters = props.characterCards.filter((characters) => {
      var regexp = new RegExp(`${search}`, 'i');
      if (characters.name.match(regexp)) return true;
      if (characters.race.match(regexp)) return true;
      return false;
    });

    props.setSearchCharacterCards(characters);
  }
  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search__input"
        placeholder="Start searching"
        name="search"
      ></input>
      <button className="btn btn_search">Search</button>
    </form>
  );
}
export default Search;

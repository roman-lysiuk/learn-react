import CharacterList from '../../components/CharacterList/CharacterList';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { fetchCharacters, fetchFilterForNameCharacters } from '../../store/reducers/ActionCreators';

export default function Main() {
  const dispatch = useAppDispatch();
  const { valueSearch } = useAppSelector((state) => state.searchReducer);
  const { characters, error, isLoading } = useAppSelector((state) => state.characterReducer);

  useEffect(() => {
    if (valueSearch && valueSearch !== '') {
      dispatch(fetchFilterForNameCharacters(valueSearch));
    } else {
      dispatch(fetchCharacters());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      <main className="main">
        <CharacterList characters={characters} />
      </main>
    </>
  );
}

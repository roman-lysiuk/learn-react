import { createAsyncThunk } from '@reduxjs/toolkit';
import characterService from '../../API/characterService';
import { AppDispatch } from '../../store/store';
import { searchSlice } from './SearchSlice';

export const fetchCharacters = createAsyncThunk('character/fetchAll', async (_, thunkApi) => {
  const allCharacters = await characterService.getAllCharacter();
  return allCharacters;
});

export const fetchFilterForNameCharacters = createAsyncThunk(
  'character/fetchFilterForName',
  async (nameCharacter: string, thunkApi) => {
    const allCharacters = await characterService.searchCharacterForName(nameCharacter);
    return allCharacters;
  }
);
export const fetchSearchCharacterForID = createAsyncThunk(
  'character/fetchSearchId',
  async (id: string, thunkApi) => {
    const character = await characterService.searchCharacterForID(id);
    return character;
  }
);

export const changeValueSearch = (searchValue: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(searchSlice.actions.changeValue(searchValue));
  };
};

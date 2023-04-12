import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Character } from '../../interfaces';
import {
  fetchCharacters,
  fetchFilterForNameCharacters,
  fetchSearchCharacterForID,
} from './ActionCreators';

interface characterState {
  characters: Character[];
  current: Character | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: characterState = {
  characters: [],
  isLoading: false,
  current: null,
  error: '',
};
export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    changeCurrentCharacter(state, action: PayloadAction<Character>) {
      state.current = action.payload;
    },
  },
  extraReducers: {
    [fetchCharacters.fulfilled.type]: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchCharacters.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    [fetchFilterForNameCharacters.fulfilled.type]: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchFilterForNameCharacters.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchFilterForNameCharacters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    [fetchSearchCharacterForID.fulfilled.type]: (state, action: PayloadAction<Character>) => {
      state.current = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchSearchCharacterForID.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSearchCharacterForID.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default characterSlice.reducer;

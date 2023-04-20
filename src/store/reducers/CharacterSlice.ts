import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

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
  error: string;
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload;
        state.error = '';
        state.isLoading = false;
      })
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.error =
          action.payload instanceof Error ? action.payload.message : 'loading character cards';
        state.isLoading = false;
      })
      .addCase(fetchFilterForNameCharacters.fulfilled, (state, action) => {
        state.characters = action.payload;
        state.error = '';
        state.isLoading = false;
      })
      .addCase(fetchFilterForNameCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilterForNameCharacters.rejected, (state, action) => {
        state.error =
          action.payload instanceof Error ? action.payload.message : 'loading character cards';
        state.isLoading = false;
      })
      .addCase(fetchSearchCharacterForID.fulfilled, (state, action) => {
        state.current = action.payload;
        state.error = '';
        state.isLoading = false;
      })
      .addCase(fetchSearchCharacterForID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchCharacterForID.rejected, (state, action) => {
        state.error =
          action.payload instanceof Error ? action.payload.message : 'loading character card';
        state.isLoading = false;
      });
  },
});

export default characterSlice.reducer;

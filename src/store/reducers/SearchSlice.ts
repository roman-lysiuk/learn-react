import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  valueSearch: string;
}
const initialState: SearchState = {
  valueSearch: '',
};
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeValue(state, action: PayloadAction<string>) {
      state.valueSearch = action.payload;
    },
  },
});

export default searchSlice.reducer;

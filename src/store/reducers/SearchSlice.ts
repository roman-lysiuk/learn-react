import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

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
    changeValue(state, action) {
      state.valueSearch = action.payload;
    },
  },
});

export default searchSlice.reducer;

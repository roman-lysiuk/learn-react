import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
import { IUserCard } from '../../components/UserCard/UserCard';

interface formCardState {
  cards: IUserCard[];
}
const initialState: formCardState = {
  cards: [],
};
export const formCardSlice = createSlice({
  name: 'formCardSlice',
  initialState,
  reducers: {
    addUserCard(state, action) {
      state.cards.push(action.payload);
    },
  },
});

export default formCardSlice.reducer;

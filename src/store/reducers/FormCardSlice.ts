import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
    addUserCard(state, action: PayloadAction<IUserCard>) {
      state.cards.push(action.payload);
    },
  },
});

export default formCardSlice.reducer;

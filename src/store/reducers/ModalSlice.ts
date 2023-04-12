import { createSlice } from '@reduxjs/toolkit';

interface modalState {
  isOpenModal: boolean;
}
const initialState: modalState = {
  isOpenModal: false,
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpenModal = true;
    },
    closeModal(state) {
      state.isOpenModal = false;
    },
  },
});

export default modalSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import characterReducer from './reducers/CharacterSlice';
import modalReducer from './reducers/ModalSlice';
import searchReducer from './reducers/SearchSlice';

const rootReducer = combineReducers({
  characterReducer,
  modalReducer,
  searchReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];

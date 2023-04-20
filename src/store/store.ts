import { combineReducers } from 'redux';
import characterReducer from './reducers/CharacterSlice';
import modalReducer from './reducers/ModalSlice';
import searchReducer from './reducers/SearchSlice';
import formCardSlice from './reducers/FormCardSlice';
import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

const rootReducer = combineReducers({
  characterReducer,
  modalReducer,
  searchReducer,
  formCardSlice,
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

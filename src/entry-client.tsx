import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';
import RenderApp from './components/RenderApp/RenderApp';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();
const root = document.getElementById('root') as HTMLElement;

hydrateRoot(
  root!,
  <Provider store={store}>
    <BrowserRouter>
      <RenderApp />
    </BrowserRouter>
  </Provider>
);

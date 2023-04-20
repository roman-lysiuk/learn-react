import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import RenderApp from './components/RenderApp/RenderApp';
import { Provider } from 'react-redux';
import React from 'react';
import { setupStore } from './store/store';

export default function ServerAppRender(url: string, options: {}) {
  const store = setupStore();
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <RenderApp />
      </StaticRouter>
    </Provider>,
    options
  );
  return stream;
}

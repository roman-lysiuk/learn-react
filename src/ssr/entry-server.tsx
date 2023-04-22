import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import RenderApp from '../components/RenderApp/RenderApp';
import { Provider } from 'react-redux';
import React from 'react';
import { ssrStore } from '../store/store';

type Options = {
  identifierPrefix?: string;
  namespaceURI?: string;
  nonce?: string;
  bootstrapScriptContent?: string;
  bootstrapScripts?: Array<string>;
  bootstrapModules?: Array<string>;
  progressiveChunkSize?: number;
  onShellReady?: () => void;
  onShellError?: () => void;
  onAllReady?: () => void;
  onError?: (error: unknown) => void;
};

export default function ServerAppRender(url: string, options: Options = {}) {
  const store = ssrStore();
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

import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ServerAppRender from './dist/server/entry-server.js';
const PORT: string = process.env.PORT || '3000';

const bootstrap = async () => {
  const server = express();
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const htmlTemplate = fs
    .readFileSync(path.resolve(__dirname, './dist/client/index.html'))
    .toString();
  const parts = htmlTemplate.split('ssr-outlet');

  server.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));
  server.use(async (req, res) => {
    try {
      res.write(parts[0]);
      const { pipe } = ServerAppRender(req.url, {
        onShellReady() {
          pipe(res);
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(err: unknown) {
          if (err instanceof Error) {
            console.error(err.message);
          }
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  server.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
  });

  return { server };
};

await bootstrap();

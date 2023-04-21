import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ServerAppRender from './dist/server/entry-server.js';

const PORT = '3000'; //import.meta.env.VITE_PORT_SERVER

const bootstrap = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const server = express();

  server.use(express.static('dist/client'));

  server.use(async (req, res) => {
    try {
      const htmlTemplate = fs
        .readFileSync(path.resolve(__dirname, './dist/client/index.html'))
        .toString();
      const parts = htmlTemplate.split('<!--ssr-outlet-->');

      res.write(parts[0]);

      const { pipe } = await ServerAppRender(req.url, {
        bootstrapScripts: ['./src/entry-client.js'],
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

import express from 'express';
import http from 'http';

import * as middleware from "./middleware";
import * as routes from "./routes";

console.info(`ok`);



const app = express();

middleware.init(app);
routes.init(app);

const httpServer = http.createServer(app);

const port = process.env.PORT || 3000;

await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
console.info(`Listening at http://localhost:${port}`);



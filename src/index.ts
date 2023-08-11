import express from 'express';
import http from 'http';



console.info(`ok`);



const app = express();

const httpServer = http.createServer(app);

const port = process.env.PORT || 3000;

await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
console.info(`🦉 Server ready at http://localhost:${port}`);



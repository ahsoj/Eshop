import express from 'express';
import type { Request, Response } from 'express';
const app = express();
import http from 'http';
const { PORT } = process.env;
const port = PORT || 5000;

const server = http.createServer(app);

const D = new Date();
const ts = `${D.getHours()}:${D.getMinutes()}:${D.getSeconds()}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use((req: Request, res: Response, next) => {
  console.log(` - ${ts} - ${req.method}:${req.url}`);
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

process.on('SIGTERM', () => {
  console.debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.debug('HTTP server closed');
  });
});

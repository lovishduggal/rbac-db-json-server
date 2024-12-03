import jsonServer from 'json-server';
import cors from 'cors';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

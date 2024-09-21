const { createServer, Model } = require('json-server');

const server = createServer();
const router = server.use('/api', createRouter('db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});

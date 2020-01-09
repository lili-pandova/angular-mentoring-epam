const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')

const router = jsonServer.router(path.join(__dirname, 'data.json'));
const middlewares = jsonServer.defaults()

const jsonData = require('./data.json');

function isAuthorized(req) {
  if (!req.headers.hasOwnProperty('authorization')) {
    return false;
  }

  let token = req.headers.authorization.split('Bearer ');
  token = token[1];

  
  const users = jsonData.users.filter((item) => {
    return item.token === token;
  });

  return users.length > 0;
}

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (isAuthorized(req)) { // add your authorization logic here
    next() // continue to JSON Server router
  } else {
    res.sendStatus(401)
  }
})

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = new Date().toLocaleString();
  }
  // Continue to JSON Server router
  next()
})

server.post('/auth/login', (req, res) => {
  const users = jsonData.users.filter((item) => {
    return item.email === req.body.email && item.password === req.body.password;
  });

  if (users.length > 0) {
    res.status(200).jsonp(users[0]);
  } else {
    res.status(400).jsonp([]);
  }
})

server.use(router);


server.listen(3000, () => {
  console.log('JSON Server is running')
})
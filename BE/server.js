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
 }

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (isAuthorized(req)) { 
    // continue to JSON Server router
    next() 
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
    console.log("ELSE")
    res.status(400).jsonp([]);
  }
})

server.use(router);


server.listen(3000, () => {
  console.log('JSON Server is running')
})
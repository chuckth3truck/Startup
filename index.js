const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const DB = require('./database.js');

const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Serve up the front-end static content hosting
app.use(express.static(__dirname+'/public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

/*
The follwoing is the code that provides 
the authentication, login and cookie endpoints 
*/

// create new user if user does not already exist
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});
/*
The follwoing is the code that provides the 
update get and delete from queue endpoints for the front end
*/

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Get Queue
secureApiRouter.get('/queue', async (_req, res) => {
  res.send(await DB.getquestion());
});

// Add to queue
secureApiRouter.post('/queue', async (req, res) => {
  await DB.storequestion(req.body);
  res.send("we good");
});
``
// Delete from queue
secureApiRouter.delete('/queue', async (req, res) => {
  queue = await DB.deletequestion(req.body);
  res.send(queue);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: __dirname+'/public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

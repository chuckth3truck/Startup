const express = require('express');
const DB = require('./database.js');


const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static(__dirname+'/public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Get Queue
apiRouter.get('/queue', async (_req, res) => {
  res.send(await DB.getquestion());
});

// Add to queue
apiRouter.post('/queue', async (req, res) => {
  await DB.storequestion(req.body);
  res.send("we good");
});
``
// Delete from queue
apiRouter.delete('/queue', async (req, res) => {
  queue = await DB.deletequestion(req.body);
  res.send(queue);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: __dirname+'/public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

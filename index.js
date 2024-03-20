const express = require('express');
const Database = require('./database.js');

const db = Database.main();


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
apiRouter.get('/queue', (_req, res) => {
  res.send(getquestion());
});

// Add to queue
apiRouter.post('/queue', (req, res) => {
  storequestion(req.body);
  res.send("we good");
});

// Delete from queue
apiRouter.delete('/queue', (req, res) => {
  queue = deletequestion(req.body);
  res.send(queue);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: __dirname+'/public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Store question will get the question object from the front end user and store in te queue object
// deletequestion is slightly redundant but im keeping cuz it works

async function storequestion(body) {
  queue = {};

  let obj = JSON.stringify(body);

  for ([name, object] of Object.entries(JSON.parse(obj))){
    queue[name] = object;
  };

  db.collection("queue").insertOne(queue);

}

function getquestion(){
  return db.getCollection("queue")
}

function deletequestion(name) {
   const queue = db.collection('queue');
   db.queue.drop();

   db.collection("queue").insertOne((name));
}
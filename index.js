const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static(__dirname+'\\public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Get Queue
apiRouter.get('/queue', (_req, res) => {
  res.send(queue);
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
  res.sendFile('index.html', { root: __dirname+'\\public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
let queue = {};
function storequestion(body) {
  let obj = JSON.stringify(body);

  for ([name, object] of Object.entries(JSON.parse(obj))){
    queue[name] = object;
  };

  return JSON.stringify(queue);


        // let dct = {
        //     "subject": subject,
        //     "question": question
        // }

        // let queue = {};
        // const queueMap = localStorage.getItem("queue");
        // if (queueMap){
        //     queue = JSON.parse(queueMap);
        // }
        // queue[name] = dct


}

function deletequestion(name) {
    return name;
}
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('Info');
  const queuecollection = db.collection('queue');
  const userCollection = db.collection('user');


  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });


  async function storequestion(body) {
    queue = {};
  
    let obj = JSON.stringify(body);
  
    for ([name, object] of Object.entries(JSON.parse(obj))){
      queue[name] = object;
    };

    console.log(queue);
  
    queuecollection.insertOne(body);
  
  }
  
  async function getquestion(){
    return await queuecollection.find().toArray();
    }
  
  function deletequestion(name) {
     queuecollection.drop();
  
     queuecollection.insertOne((name));
  }

module.exports = {
  storequestion,
  getquestion,
  deletequestion,

};

const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
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



  function getUser(email) {
    return userCollection.findOne({ email: email });
  }

  function getUserByToken(token) {
    return userCollection.findOne({ token: token });
  }

  async function createUser(email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
      authourized: false,

    };
    await userCollection.insertOne(user);
  
    return user;
  }


  async function storequestion(body) {
    queue = {};
  
    let obj = JSON.stringify(body);
  
    for ([name, object] of Object.entries(JSON.parse(obj))){
      queue[name] = object;
    };

  
    queuecollection.insertOne(body);
  
  }
  
  async function getquestion(){
    return await queuecollection.find().toArray();
    }
  
  async function deletequestion(name) {
    //  await queuecollection.drop();
    user = name.name;
    await queuecollection.deleteOne( {"name": user} )
  
    //  queuecollection.insertOne((name));
  }

module.exports = {
  storequestion,
  getquestion,
  deletequestion,
  createUser,
  getUser,
  getUserByToken,

};

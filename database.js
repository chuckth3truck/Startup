const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
    // Connect to the database cluster
    const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
    const client = new MongoClient(url);
    const db = client.db('Info');
    const collection = db.collection('queue');


    // Test that you can connect to the database
    (async function testConnection() {
      await client.connect();
      await db.command({ ping: 1 });
    })().catch((ex) => {
      console.log(`Unable to connect to database with ${url} because ${ex.message}`);
      process.exit(1);
    });

    return db, collection
}

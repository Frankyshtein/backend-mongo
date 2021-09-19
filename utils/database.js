const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'test';

let db;

// Create a new MongoClient
const client = new MongoClient(url);

exports.MongoConnect = (cb) => {
  client
    .connect()
    .then((client) => {
      console.log('Connected successfully to database');
      db = client.db(dbName);
      cb();
    })
    .catch((err) => console.log('Look at error', err));
};

exports.getDb = () => {
  if (db) {
    return db;
  }
  throw 'No database found!';
};

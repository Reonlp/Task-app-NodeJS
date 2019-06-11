const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'task-manager';



MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if(error){
    return console.log('Unable to connect to database');
  }

  const db = client.db(databaseName);

  /*db.collection('users').updateOne({
    _id: new ObjectID("5cfd9b995d3ca7215c06b38a")
  }, {
    $inc: {
      age: 1
    }
  })
  .then((result) => {console.log(result)})
  .catch((error) => {console.log(error)}) */

  db.collection('tasks').updateMany({
    completed: false
  }, {
    $set: {
      completed: true
    }
  })
  .then((result) => {console.log(result.modifiedCount)})
  .catch((error) => {console.log(error)})

});

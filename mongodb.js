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

  db.collection('users').deleteOne({
    _id: new ObjectID("5cfda1fa10a75e26dcfe9b6f")
  })
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

  /*db.collection('users').deleteMany({
    age: "28"
  })
  .then((result) => {console.log(result)})
  .catch((error) => {console.log(error)})

  */
});

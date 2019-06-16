/*What is a REST API: Representational state transfer application programming interface*/
//It's nothing more than a set of tools that allow you to write software apps
//REST API. Allows clients such as a web app to access and get and manipulate
//resources, data, etc.i

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

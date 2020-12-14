const mongoose = require('mongoose');
const URI = '';
//const URI = 'mongodb://localhost/mern-crud-test';

mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology: true})//avoid warnings
  .then(db => console.log('Db is connected'))
  .catch(error => console.error("EX "+error));

module.exports = mongoose;

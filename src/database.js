const mongoose = require('mongoose');
const URI = 'mongodb+srv://NeuronAdmin:M0ng00s3x@cluster0.pevil.mongodb.net/landingpage?retryWrites=true&w=majority';
//const URI = 'mongodb://localhost/mern-crud-test';

mongoose.connect(URI, {useNewUrlParser:true, useUnifiedTopology: true})//avoid warnings
  .then(db => console.log('Db is connected'))
  .catch(error => console.error("EX "+error));

module.exports = mongoose;
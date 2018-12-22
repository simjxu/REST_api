const express = require('express');
const routes = require('./routes/api.js');

const app = express();

app.use('/api', routes);
// To save lines, can also do 
// app.use('/api, require('./routes/api.js')) 

app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
});
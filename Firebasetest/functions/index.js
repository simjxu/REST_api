const admin = require('firebase-admin');

const functions = require('firebase-functions');
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

// Initialize the database
admin.initializeApp(functions.config().firebase);
var db = admin.firestore();

// ------ End test

app.get('/database', (req, res) => {
  res.send('get received');
});

app.post('/database', (req, res) => {

  res.send('POST sent');
  console.log(req.headers['content-type']);
  console.log(req.query);
  console.log(req.body['key1']);   // Shows the value of the key
  console.log(req.body);
  console.dir(req.body);                  // console.dir shows data inside the object

  // req.body.forEach(element => {
  //   console.log(element);
  // });

  console.log("------------------TESTING------------------");

  // Remember to send raw body as JSON(application/json)
  req.body.forEach(element => {
    console.log(element);
    Object.keys(element).forEach(function(key) {
      console.log('Key : ' + key + ', Value : ' + element[key])
    })
  });

  // Now add all these to the database
  var Device1Ref = db.collection('devices').doc('Device1');
  req.body.forEach(element => {
    Device1Ref.set(element);

    // Object.keys(element).forEach(function(key) {
    //   var setDevice = Device1Ref.set({
    //     key: element[key],
    //     'keyx': "anotherkey"
    //   })
    // })
  });

  // Object.keys(req.body).forEach(function(key) {
  //   console.log('Key : ' + key + ', Value : ' + req.body[key])
  // })

  // var Device1Ref = db.collection('devices').doc('Device1');
  // var setDevice = Device1Ref.set({
  //   'key1': req.body['key1'],
  //   'key2': req.body['key2']
  // })

});



exports.app = functions.https.onRequest(app);



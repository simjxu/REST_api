// Remember add a trailing slash when posting to 
// https://sjx-restapi.firebaseapp.com/database/
// reference: https://codeburst.io/express-js-on-cloud-functions-for-firebase-86ed26f9144c
const admin = require('firebase-admin');

const functions = require('firebase-functions');
const express = require('express');
const app = express();

// Initialize the database
admin.initializeApp(functions.config().firebase);
var db = admin.firestore();

// ------ End test

app.get('/database', (req, res) => {
  res.send('get received');
  var Device1Ref = db.collection('devices').doc('Device1');
  Device1Ref.set({keyX: 'testX'});
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

  req.body.forEach(element => {
    console.log(element);
    Object.keys(element).forEach(key => {
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


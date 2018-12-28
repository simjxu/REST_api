const admin = require('firebase-admin');

const functions = require('firebase-functions');
const express = require('express');

const app = express();
// app.use(express.urlencoded({ extended: true }));

// Initialize the database
admin.initializeApp(functions.config().firebase);
var db = admin.firestore();

// ------ End test

app.get('/database', (req, res) => {
  res.send('get received');
});

// // Cached version
// app.get('/timestamp-cached', (request, response) => {
//   response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
//   response.send(`${Date.now()}`);
// });

app.post('/database', (req, res) => {
  res.send('POST sent');
  console.log(req.headers['content-type']);
  console.log(req.query);
  console.log(req.body['key1']);   // Shows the value of the key
  console.dir(req.body);                  // console.dir shows data inside the object

  // var Device1Ref = db.collection('devices').doc('Device1');
  // var setDevice = Device1Ref.set({
  //   'key1': req.body['key1'],
  //   'key2': req.body['key2']
  // })

  // var aTuringRef = db.collection('devices').doc('aturing');
  // var setAlan = aTuringRef.set({
  //   'first': 'Alan',
  //   'middle': 'Mathison',
  //   'last': 'Turing',
  //   'born': 1912
  // });

});



exports.app = functions.https.onRequest(app);



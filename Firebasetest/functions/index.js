const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/timestamp', (request, response) => {
  response.send(`${Date.now()}`);
});

// Cached version
app.get('/timestamp-cached', (request, response) => {
  response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  response.send(`${Date.now()}`);
});

app.post('/timestamp', (req, res) => {
  res.send('POST sent');
});

exports.app = functions.https.onRequest(app);


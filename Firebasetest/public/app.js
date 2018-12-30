// Initialize Firebase
var config = {
  apiKey: "AIzaSyB5lqsDgRkULlatnbLZxNCxetKQKTh6NV0",
  authDomain: "sjx-restapi.firebaseapp.com",
  databaseURL: "https://sjx-restapi.firebaseio.com",
  projectId: "sjx-restapi",
  storageBucket: "sjx-restapi.appspot.com",
  messagingSenderId: "327377152815"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();

// Define the collection and document to pull
const docRef = firestore.collection("devices").doc("Device1");

// Identify the HTML tag id to output data to
const outputString = document.querySelector("#deviceData");

// Pull the json from the collection/document in firestore and 
// update automatically
getRealtimeUpdates = function() {
  docRef.onSnapshot(function (doc) {
    if (doc && doc.exists) {
      const myData = doc.data();
      var myStr = JSON.stringify(myData, null, 2);
      outputString.innerText = myStr;
    }
  });
}
getRealtimeUpdates();

var firebaseConfig = {
  apiKey: "AIzaSyBbedwg32NZCA8kWL2Ih790Ig76HSCZhck",
  authDomain: "project-94-1dcc1.firebaseapp.com",
  databaseURL: "https://project-94-1dcc1-default-rtdb.firebaseio.com",
  projectId: "project-94-1dcc1",
  storageBucket: "project-94-1dcc1.appspot.com",
  messagingSenderId: "46178660613",
  appId: "1:46178660613:web:f0049dca8be9d80ba7876c"
};

// Initialize Firebase
 //const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

function ad() {
  add_room = document.getElementById("add-room").value;
  firebase.database().ref("/").child(add_room).update({
    name : "coder"
  });
}






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code

 //End code
 });});}
getData();

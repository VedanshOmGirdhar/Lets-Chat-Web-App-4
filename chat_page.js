//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDKqgW8xZOFXrTzrqRHUZd4YUWOUVAoKoA",
    authDomain: "lets-chat-web-app-7c986.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-7c986-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-7c986",
    storageBucket: "lets-chat-web-app-7c986.appspot.com",
    messagingSenderId: "933741798166",
    appId: "1:933741798166:web:a725c14da33ebe5cd56637"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
roomname = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
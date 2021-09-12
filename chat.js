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
  document.getElementById("user_name").innerHTML = "Welcome " + username;

  function addRoom(){
        roomname = document.getElementById("room_name").value;
        firebase.database().ref("/").child(roomname).update({
            purpose : "Adding Room Name"
        });
        localStorage.setItem("roomname", roomname);
        window.location = "chat_page.html";

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'roomname' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){      
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html"
}


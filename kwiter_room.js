var firebaseConfig = {
    apiKey: "AIzaSyBUqmVW12g8AgnLsvTX1sXEm3XJb85yyes",
    authDomain: "kwitter-fbf03.firebaseapp.com",
    databaseURL: "https://kwitter-fbf03-default-rtdb.firebaseio.com",
    projectId: "kwitter-fbf03",
    storageBucket: "kwitter-fbf03.appspot.com",
    messagingSenderId: "208966449240",
    appId: "1:208966449240:web:199d64ffa9952d8a48f22d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();

function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name);

 window.location = "chatRoom.html";
}

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "chatRoom.html"
}

function name1(){
      document.getElementById("name").textContent="Welcome "+localStorage.getItem("user_name");
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
      
  }
  
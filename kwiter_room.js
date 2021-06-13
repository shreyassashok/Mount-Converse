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
  var myDB=firebase.database()
function addRoom(){
    var room=document.getElementById("Addroom").value 
    if(!room){
          alert("Room missing")
    }
    else{
          myDB.ref("/"+room).set({
          description:"This Room is for chatting Purpose"
          });
          localStorage.setItem("room",room)
          window.location="chatRoom.html"
    }
}

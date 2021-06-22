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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    console.log("entered");
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    messege:msg,
    like:0
});
document.getElementById("msg").value="";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    
}

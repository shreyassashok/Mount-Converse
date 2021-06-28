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
function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name=message_data['name'];
                message=message_data['message'];
                like=message_data['like'];
                name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
                message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
                like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
                span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like : "+like+"</span> </button><hr>";

                row=name_with_tag+message_with_tag+like_button+span_with_tag;
                document.getElementById("output").innerHTML+=row;
                //End code
            }
        });
    });
}
getData();


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    
}
function speak(){
    var synth=window.speechSynthesis;
     speak_data="Taking Your Selfie In Five Seconds"
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save()
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click()
}

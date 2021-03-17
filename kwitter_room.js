
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAbLfiA10wChHqPP694CBZySdBZYWx2rxU",
    authDomain: "kwitter-6c970.firebaseapp.com",
    databaseURL:"https://kwitter-6c970-default-rtdb.firebaseio.com",
    projectId: "kwitter-6c970",
    storageBucket: "kwitter-6c970.appspot.com",
    messagingSenderId: "143887052025",
    appId: "1:143887052025:web:d79a36380c838d178c8628"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var user_name=localStorage.getItem("username");

document.getElementById("user_name").innerHTML="Welcome "+user_name;

function addRoom(){
var room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding user name"
});
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id'># "+Room_names+"</div><hr>";
      document.getElementById("output").innerhtml+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
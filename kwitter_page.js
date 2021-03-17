//YOUR FIREBASE LINKS
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

    var user_name=localStorage.getItem("username")

    var room_name=localStorage.getItem("room_name")

    function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+Name+"<img class='user_text' src='tick.png'></h4>";
row = "<h4> " + Name + "<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>" + message + "</h4><button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";


document.getElementById("output").innerhtml+=row
//End code
      } });  }); }
getData();

function updateLike(message_id){
console.log("clicked on liked button -"+ message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes+Number(likes)+1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }

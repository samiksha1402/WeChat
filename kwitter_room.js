
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBd038wEGMDKFgrLQV_eWDsZ_Xz40jLiOE",
      authDomain: "wechat-2f7a3.firebaseapp.com",
      databaseURL: "https://wechat-2f7a3-default-rtdb.firebaseio.com",
      projectId: "wechat-2f7a3",
      storageBucket: "wechat-2f7a3.appspot.com",
      messagingSenderId: "1022883714240",
      appId: "1:1022883714240:web:dc7651c12aef709aad0925"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    username = localStorage.getItem("user_name");
    document.getElementById("welcome_txt").innerHTML = "Welcome " + username + "!";

    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
       console.log("room_names - " + room_names );
       row = "<div class='room_name' id="+room_names+" onclick='redirectTo_roomname(this.id)'> #" + room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function redirectTo_roomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
      }
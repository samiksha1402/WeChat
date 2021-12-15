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
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
}



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
      window.location.replace("index.html");
}

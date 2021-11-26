
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

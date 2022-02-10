//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDxfxjrcmCifD2Kzq_lh4_1nxM7sDwvdQ4",
      authDomain: "kwitter-d83ef.firebaseapp.com",
      databaseURL: "https://kwitter-d83ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-d83ef",
      storageBucket: "kwitter-d83ef.appspot.com",
      messagingSenderId: "679719386496",
      appId: "1:679719386496:web:96347368afb68544efd565"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem('user_name');
    room_name=localStorage.getItem('room_name');   
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
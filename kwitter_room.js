
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML="HOLA "+user_name+"!"
    function addRoom(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpus:"addingroomname"
      });
            localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
      
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}

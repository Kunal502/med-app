//YOUR FIRE BASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDrZOm1OOlLdb_jzGGnznRNwO2_7KxsRpI",
    authDomain: "pratice-6b86f.firebaseapp.com",
    databaseURL: "https://pratice-6b86f-default-rtdb.firebaseio.com",
    projectId: "pratice-6b86f",
    storageBucket: "pratice-6b86f.appspot.com",
    messagingSenderId: "501843594267",
    appId: "1:501843594267:web:eaf2e2773cef1bde62bcbe",
    measurementId: "G-YY0FSY3T4T"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      //window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location ="kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
  }
  
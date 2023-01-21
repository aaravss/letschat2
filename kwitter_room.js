var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "👋 Welcome back, " + user_name + "!"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7yI9pLJ1nhv14-plBhzUwPbF6KomDbxg",
    authDomain: "letschat-83010.firebaseapp.com",
    projectId: "letschat-83010",
    storageBucket: "letschat-83010.appspot.com",
    messagingSenderId: "837747164388",
    appId: "1:837747164388:web:2747023ea8fd862cd058f1"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
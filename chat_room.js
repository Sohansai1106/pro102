const firebaseConfig = {
    apiKey: "AIzaSyCr67_ZkRZdrS0H8-7lC0g_jrQC2UKGb-Y",
    authDomain: "project102-9143f.firebaseapp.com",
    databaseURL: "https://project102-9143f-default-rtdb.firebaseio.com",
    projectId: "project102-9143f",
    storageBucket: "project102-9143f.appspot.com",
    messagingSenderId: "590948407187",
    appId: "1:590948407187:web:edac68769aa2227d21ba66"
  };

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
        localStorage.setItem("room_name" , room_name);

        window.location ="chat_room.html";
}
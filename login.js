var username1 = "Prevbons";
var password1 = "I love you";

var username2 = "Vishesh";
var password2 = "Prev Loves Me 2";

var username3 = "Hot Chocolate";
var password3 = "Sweet";

var username4 = "User4";
var password4 = "0000";

var username5 = "User5";
var password5 = "0000";

var username6 = "User6";
var password6 = "0000";

var numOfUsers = 6;




function login() {
  var userAt = document.getElementById("name").value;
  var passAt = document.getElementById("pwd").value;
  console.log("User: '" + userAt + "'. Password: '" + passAt + "'.")

  if (userAt === "Rickroll") {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }

  for (var i = 1; i <= numOfUsers; i++) {
    if (userAt === window["username" + i]) {

      if (passAt === window["password" + i]) {
        window.location.href = "https://visheshbons.github.io/the-ultimate-login-page/User" + i + "/home.html";
        return;
      } else {
        alert("The password '" + passAt + "' is incorrect.");
        console.log("Attempt to log in to " + userAt + " with the password '" + passAt + "'.");
      }

    } else if (i == numOfUsers) {
      alert("Log-in failed.")
      console.log("Log-in failed. The user '" + userAt + "' and the password '" + passAt + "' do not match.")
    }
  }
}

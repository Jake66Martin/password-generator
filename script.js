// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz"

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var numbers = "0123456789"

var specialChar = "!@#$%^&*`/*-+=_"

function generatePassword() {
  alert("Beep boop! Bzzzzzz. You have activated password bot 3000. It seems you need help with a new password.")
  
  prompt("Bzzzz bzzzz *machine noises* My systems tell me that you have a choice between 8 and 128 characters for your password. What will it be? ")
  
  prompt("")


  let password = Math.random()*101;

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "0123456789";

var specialChar = "!@#$%^&*`/*-+=_";

function generatePassword() {
  alert("Beep boop! Bzzzzzz. You have activated password bot 3000. It seems you need help with a new password.");
  
  var prompt1 = prompt("Bzzzz bzzzz *machine noises* My systems tell me that you have a choice between 8 and 128 characters for your password. What will it be?");
 
  var prompt2 = prompt("*whirring noises* Splendid choice human. Now. Would you like your password to contain lower case letters? Yes or no.");

  var prompt3 = prompt("Superb. *computing, electricity sparks* Now human. Would you like your password to contain upper case letters? Yes or no.");

  var prompt4 = prompt("Fine choice human. *more computing* How about we add numerals to your password. Yes or no")

  var prompt5 = prompt("So far so great human. For your final choice, would you like to add special characters to your password? Yes or no.")

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


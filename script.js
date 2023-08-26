// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "0123456789";

var specialChar = "!@#$%^&*`/*-+=_";

var finalString = "";

var alert1 = alert("Beep boop! Bzzzzzz. You have activated password bot 3000. It seems you need help with a new password.");
  
var prompt1 = prompt("Bzzzz bzzzz *machine noises* My systems tell me that you have a choice between 8 and 128 characters for your password. What will it be?");

var prompt2 = prompt("*whirring noises* Now. Would you like your password to contain lower case letters? Yes or no.");

var prompt3 = prompt("*computing, electricity sparks* Alright human. Would you like your password to contain upper case letters? Yes or no.");

var prompt4 = prompt("*more computing* How about we add numerals to your password? Yes or no.");

var prompt5 = prompt("So far so great human. For your final choice, would you like to add special characters to your password? Yes or no.");



function generatePassword(length) {
 
  if (prompt2 == "yes") {
    finalString += lowerCase;
  } else if (prompt2 == "no") {}
  
  
  if (prompt3 == "yes") {
    finalString += upperCase;
  } else if (prompt3 == "no") {}
  
  if (prompt4 == "yes") {
    finalString += numbers;
  } else if (prompt3 == "no") {}
  
  if (prompt5 == "yes") {
    finalString += specialChar
  } else if (prompt5 == "no") {}

  var password = " "
    var finalStringLength = finalString.length;
    for ( let i = 0; i < length; i++ ) {
        password += finalString.charAt(Math.floor(Math.random() * finalStringLength));
    }

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(prompt1);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



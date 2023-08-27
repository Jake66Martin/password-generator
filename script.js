// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "0123456789";

var specialChar = "!@#$%^&*`/*-+=_";

var finalString = "";

var alert1 = alert("Beep boop! Bzzzzzz. You have activated password bot 3000. It seems you need help with a new password.");


function prompter() {

prompt1 = prompt("Bzzzz bzzzz *machine noises* My systems tell me that you have a choice of number from 8 to 128 characters for your password. What will it be?");

if (prompt1 >= 8 && prompt1 <= 128) {
  return prompt1;
} else if (!(prompt1 > 8 && prompt1 <128 && prompt1 == "")) {
  alert("Please choose a number from 8 to 128.")
  prompter();
}
}

prompter();


function prompter2() {

  prompt2 = prompt("*whirring noises* Now. Would you like your password to contain lower case letters? Yes or no.");

  if (prompt2 == "yes", "Yes", "YEs", "YES") {
    finalString += lowerCase;
    return;
  } else if (prompt2 == "no", "No", "NO") {
    return;
  } else { 
    alert("Please input yes or no");
    prompter2();
  }
}



prompter2();


function prompter3 () {

prompt3 = prompt("*computing, electricity sparks* Alright human. Would you like your password to contain upper case letters? Yes or no.");

if (prompt3 == "yes", "Yes", "YEs", "YES") {
  finalString += upperCase;
  return;
} else if (prompt3 == "no", "No", "NO") {
  return;
} else {
  alert("Please inpute yes or no");
  prompter3();
}
}

prompter3();



function prompter4() {

prompt4 = prompt("*more computing* How about we add numerals to your password? Yes or no.");

if (prompt4 == "yes", "Yes", "YEs", "YES") {
  finalString += numbers;
  return;
} else if (prompt4 == "no", "No", "NO") {
  return;
} else {
  alert("Please input yes or no")
  prompter4();
}
}

prompter4();



function prompter5() {

prompt5 = prompt("So far so great human. For your final choice, would you like to add special characters to your password? Yes or no.");

if (prompt5 == "yes", "Yes", "YEs", "YES") {
  finalString += specialChar;
  return;
} else if (prompt5 == "no", "No", "NO") {
  return;
} else {
  alert("Please input yes or no");
  prompter5();
}
}

prompter5();

if (prompt2 == "no", "No", "NO" && prompt3 == "no", "No", "NO" && prompt4 == "no", "No", "NO" && prompt5 == "no", "No", "NO") {
  alert("You cannot pick no for every answer human, lets restart the process.")
  prompter2();
  prompter3();
  prompter4();
  prompter5();
}

function generatePassword(length) {
 
  var password = " ";
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



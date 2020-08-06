//Strings to populate password
let letters = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let special = "!@#$%^&*()~><?/][}{";
let passwordString = "";
let passLength = 8;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var truePrompts = prompts();
  var falsePrompts = "You have not chosen any characters with which to create the new password"
  var passwordText = document.querySelector("#password");
  if (truePrompts) {
  var password = generatePassword();
  passwordText.value = password;
  } else {
    passwordText.value = falsePrompts;
  }
}

function generatePassword() {
  let newPassword = "";
  for (let i = 0; i < passLength; i++){
  let randomInt = Math.floor(Math.random()*passwordString.length);
  newPassword = newPassword + passwordString.charAt(randomInt);
  }
  return newPassword;
}

function prompts() {
  passwordString = "";
  passLength = prompt("How long should your password be?\nChoose a number between 8 and 128.");
  if (isNaN(passLength)) {
    return false;
  } else if (passLength < 8 || passLength > 128) {
    alert("Passwords must be a minimum of 8 characters \nand a maximum of 128 charactrers")
  } else {
  let useUpper = confirm("Do you want your password to have upper case letters?\n'Ok' for yes and 'Cancel' for no.");
  if(useUpper) {
    passwordString = passwordString.concat(letters.toUpperCase());
    console.log(passwordString);
  }
  let useLower = confirm("Do you want your password to have lower case letters?\n'Ok' for yes and 'Cancel' for no.");
  if (useLower) {
    passwordString = passwordString.concat(letters);
    console.log(passwordString)
  }
  let useNumbers = confirm("Do you want your password to have numbers?\n'Ok' for yes and 'Cancel' for no.");
  if (useNumbers){
    passwordString = passwordString + number;
    console.log(passwordString);
  }
  let useSpecials = confirm("Do you want your password to have upper case letters?\n'Ok' for yes and 'Cancel' for no.");
  if (useSpecials) {
    passwordString = passwordString + special;
    console.log(passwordString);
  } 
  return true;
}
}

// function stringConcat() {
// let string1 = "this is a string";
// console.log(string1);
// let string2 = "this is also a string";
// console.log(string2);
// let string3 = string1.concat(" ", string2);
// console.log(string3);
// }

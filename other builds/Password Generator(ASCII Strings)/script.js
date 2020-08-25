let passLenght = 8;
let newString = "";

function createLowerString() {
  let lowerString = "";
  for (let i = 97; i < 123; i++) {
    lowerString += String.fromCharCode(i);
    console.log(lowerString);
  }
  return lowerString;
}
function createUpperString() {
  let upperString = "";
  for (let i = 65; i < 91; i++) {
    // let newUpper = String.charCodeAt(ASCII);
    upperString += String.fromCharCode(i);
    console.log(upperString);
  }
  return upperString;
}
function createNumberString() {
  numberString = "";
  for (let i = 48; i < 58; i++) {
    // let newNumber = String.CharCodeAt(ASCII);
    numberString += String.fromCharCode(i);
    console.log(numberString);
  }
  return numberString;
}

let special = "!@#$%^&*()~}{][?><";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var truePrompts = prompts();
  var falsePrompts =
    "You have not chosen any characters with which to create the new password";
  var passwordText = document.querySelector("#password");
  if (truePrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = falsePrompts;
  }
}

function generatePassword(lower, upper, numbers, special, length) {
  let newPassword = "";
  for (let i = 0; i < passLength; i++) {
    let randomInt = Math.floor(Math.random() * newString.length);
    newPassword += newString.charAt(randomInt);
  }
  return newPassword;
}

function prompts() {
  newString = "";
  passLength = prompt(
    "How long should your password be?\nChoose a number between 8 and 128."
  );
  if (isNaN(passLength)) {
    return false;
  } else if (passLength < 8 || passLength > 128) {
    alert(
      "Passwords must be a minimum of 8 characters \nand a maximum of 128 charactrers"
    );
  } else {
    let useUppers = confirm(
      "Do you want your password to have upper case letters?\n'Ok' for yes and 'Cancel' for no."
    );
    if (useUppers) {
      newString = newString.concat(createUpperString());
      console.log(newString);
    }
    let useLowers = confirm(
      "Do you want your password to have lower case letters?\n'Ok' for yes and 'Cancel' for no."
    );
    if (useLowers) {
      newString = newString.concat(createLowerString());
      console.log(newString);
    }
    let useNumbers = confirm(
      "Do you want your password to have numbers?\n'Ok' for yes and 'Cancel' for no."
    );
    if (useNumbers) {
      newString = newString.concat(createNumberString());
      console.log(newString);
    }
    let useSpecials = confirm(
      "Do you want your password to have upper case letters?\n'Ok' for yes and 'Cancel' for no."
    );
    if (useSpecials) {
      newString = newString.concat(special);
      console.log(newString);
    }
    return true;
  }
}

/*
//generate random lower case letter, upper case letter, number, or symbol (upper case letter, lower case letter, and numbers generated from ASCII)
function getRandomLowr() {
  return String.fromCharCode(Math.floor(Math.random()*26)-97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()~{}?><[]";
  return symbols[Math.floor(Math.random()*symbols.length)];
}*/

let passLenght = 8;
let newArray = "";

function createLowerArray() {
  let lowerArray = "";
  for (let i = 97; i < 123; i++) {
    lowerArray += String.fromCharCode(i);
    console.log(lowerArray);
  }
  return lowerArray.split();
}
function createUpperArray() {
  let upperArray = [];
  for (let i = 65; i < 91; i++) {
    // let newUpper = String.charCodeAt(ASCII);
    upperArray += String.fromCharCode(i);
    console.log(upperArray);
  }
  return upperArray.split();
}
function createNumberArray() {
  numberArray = "";
  for (let i = 48; i < 58; i++) {
    // let newNumber = String.CharCodeAt(ASCII);
    numberArray += String.fromCharCode(i);
    console.log(numberArray);
  }
  return numberArray.split();
}

let special = "!@#$%^&*()~}{][?><".split();

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
  // newArray.split("");
  // console.log(newArray);
  for (let i = 0; i < passLength; i++) {
    let randomInt = Math.floor(Math.random() * newArray.length);
    newPassword += newArray[randomInt];
  }
  return newPassword;
}

function prompts() {
  newArray = "";
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
      newArray = newArray.concat(createUpperArray());
      console.log(newArray);
    }
    let useLowers = confirm(
      "Do you want your password to have lower case letters?\n'Ok' for yes and 'Cancel' for no."
    );
    if (useLowers) {
      newArray = newArray.concat(createLowerArray());
      console.log(newArray);
    }
    let useNumbers = confirm(
      "Do you want your password to have numbers?\n'Ok' for yes and 'Cancel' for no."
    );
    if (useNumbers) {
      newArray = newArray.concat(createNumberArray());
      console.log(newArray);
    }
    let useSpecials = confirm(
      "Do you want your password to have upper case letters?\n'Ok' for yes and 'Cancel' for no."
    );
    if (useSpecials) {
      newArray = newArray.concat(special);
      console.log(newArray);
    }
    newArray.replace(",", " ");
    console.log(newArray);
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

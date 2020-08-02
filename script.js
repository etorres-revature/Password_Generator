//lower case letter array
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//upper case letter array
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//number array
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//special character array
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?"];

//creating global variable to contain password length
let passwordLength = 8;

//array to hold choices from prompts
let choice = [];

//function to choose random lower case letter from lower array
//function getRandomLower() {
//  return lower[Math.floor(Math.random() * lower.length)];
//}

//function to choose random upper case letter from upper array
//function getRandomUpper() {
//  return upper[Math.floor(Math.random() * upper.length)];
//}

//function to choose random number form number array
//function getRandomNumber() {
//  return number[Math.floor(Math.random() * number.length)];
//}

//function to choose random special character from special array
//function getRandomSpecial() {
//  return special[Math.floor(Math.random() * special.length)];
//}

// Assignment Code - establishes a variable assigned to the "Generate Password" button in the html
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button - creates an event listener associated with the above variable
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var truePrompts = passwordCharacters();
  var passwordText = document.querySelector("#password");
  if (truePrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
    return passwordText;
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choice.length)
    password = password + choice[randomCharacter];
  }
  return password;
}

function passwordCharacters() {
  choice = [];
  passwordLength = prompt("Please choose a length for you password \nPasswords must be a minimum of 8 characters and a maximum of 128 characters.");
  if (isNaN(passwordLength)) {
    alert("Please enter a numerical value.");
    return false;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please input a valid password length\nminimum number of characters = 8\nmaximum number of characters = 128")
  } else {
    let hasLower = confirm("Do you want your password to contain lower case characters?\n OK = YES and Cancel = NO");
    if (hasLower) {
      choice = choice.concat(lower);
    }
    let hasUpper = confirm("Do you want your password to contain upper case characters?\n OK = YES and Cancel = NO");
    if (hasUpper) {
      choice = choice.concat(upper);
    }
    let hasNumber = confirm("Do you want your password to contain numbers\n OK = YES and Cancel = NO");
    if (hasNumber) {
      choice = choice.concat(number);
    }
    let hasSpecial = confirm("Do you want your password to contain special characters\n OK = YES and Cancel =NO")
    if (hasSpecial) {
      choice = choice.concat(special);
    }
    return true;
  }
}



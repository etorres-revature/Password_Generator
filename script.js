//lower case letter array
let lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//upper case letter array
let upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//number array
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//special character array
let special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "~",
  "?",
  "<",
  ">",
  ":",
  ";",
  "[",
  "]",
  "{",
  "}",
];

//creating global variable to contain password length
let passwordLength = 8;

//array to hold choices from prompts
let choice = [];

//creating variable to contain the textarea to display the new password and other messages in HTML
var passwordText = document.querySelector("#password");

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

// Write password to the #password input - this function is called from the Event Listner with the click foo the "Generate Password" button
function writePassword() {
  //clearing out the password textarea display
  passwordText.value =
    "Press the 'Generate' button below to create your new, secure password";
  //create a variable to collect the return from the passwordCharacters function, whcih will determine which characters are available for the new password
  var truePrompts = passwordCharacters();
  var falsePrompts = "Insufficient user entries to create new password.";
  //if passwordCharacters returns true then this logic will run
  if (truePrompts) {
    //creating variable to hold new password
    //will run the generatePassword funciton
    var newPassword = generatePassword();
    //assigning the newPassword variable, which has been assigned the random password created by the generatePassword funciton as the value for passwordText variable
    //this is what will make is show up in the text area on the HTML
    passwordText.value = newPassword;
  } else {
    passwordText.value = falsePrompts;
  }
}

function generatePassword() {
  //creating password variable scoped to this funciton to hold the new password
  var password = "";
  //for loop to create the password of the appropriate length as dictated through the passwordCharacters function
  for (var i = 0; i < passwordLength; i++) {
    //variable to hold each new random number
    //math floor will fut off any decimals and math random will choose a random interger between 0 and .99999
    //multiplied by the choice.length attribute to give it an index to choose a character
    var randomCharacter = Math.floor(Math.random() * choice.length);
    //taking the password variable form the function and concatenating it with the character in the chocie array at randomCharacter index
    password = password + choice[randomCharacter];
  }
  //having the return of the function to be the password, which will go into the newPassword variable in writePassword funciton above
  return password;
}

function passwordCharacters() {
  //resets the choice array each time the passwordCharacters funciton runs
  //array is created outside of the function so that its value will be held even after the funciton has run
  choice = [];
  //uses the passwordLength variable to display a prompt to get the users desired password length
  //variable is created outside of the function so that its value will be held even after the funciton has run
  passwordLength = prompt(
    "Please choose a length for you password \nPasswords must be a minimum of 8 characters \nand a maximum of 128 characters."
  );
  //since the passwordLength must be a number this logic will alert the user to enter a number if he/she tries to enter a string value
  if (isNaN(passwordLength)) {
    alert("Please enter a numerical value.");
    return false;
    //creates validation for the passwordLength entry to ensure that the password is at least 8 characters and no more than 128
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Please input a valid password length.\nMinimum number of characters = 8\nMaximum number of characters = 128"
    );
    return false;
  } else {
    //logic uses confirms from here on out so no further validation is required since Boolean true/false values will be created
    //user will be asked to confirm (ok/cancel) if the password should contain lower case letters
    let hasLower = confirm(
      "Do you want your password to contain lower case characters?\n OK = YES and Cancel = NO"
    );
    //if logic so that when hasLower variable is true the lower case array of letters will be added to the choice array
    if (hasLower) {
      choice = choice.concat(lower);
    }
    //user will be asked to confirm (ok/cancel) if the password should contain upper case letters
    let hasUpper = confirm(
      "Do you want your password to contain upper case characters?\n OK = YES and Cancel = NO"
    );
    //if logic so that when hasUpper variable is true the lower case array of letters will be added to the choice array
    if (hasUpper) {
      choice = choice.concat(upper);
    }
    //user will be asked to confirm (ok/cancel) if the password should contain numbeers
    let hasNumber = confirm(
      "Do you want your password to contain numbers\n OK = YES and Cancel = NO"
    );
    //if logic so that when hasNumber variable is true the lower case array of letters will be added to the choice array
    if (hasNumber) {
      choice = choice.concat(number);
    }
    //user will be asked to confirm (ok/cancel) if password should contain special characters
    let hasSpecial = confirm(
      "Do you want your password to contain special characters\n OK = YES and Cancel =NO"
    );
    //if logic so that when hasSpecial variabgle is true the lower case array of letter will be added to the choice array
    if (hasSpecial) {
      choice = choice.concat(special);
      //logic for if all confirms are cancelled to alert user that they have to choose a character set to create the new password
    } else if (!hasLower && !hasUpper && !hasNumber && !hasSpecial) {
      alert(
        "You have not chosen characters with which to create the new password."
      );
      return false;
    }
    return true;
  }
}

let strLower = "abcdefghijklmnopqrstuvwxyz";
// let strUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let strNumber = "0123456789";
let strSpecial = "!@#$%^&*()~][{}?>/";
let arrayChoices = [];
let passwordLength = 8;

// strLower.split("");
// strSpecial.split("");
// strNumber.split("");
// strUpper.split('');


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  userPrompts();
  var password = generatePassword();
  console.log(password)

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let newPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    let randomInt = Math.floor(Math.random() * arrayChoices.length);
    newPassword = newPassword + arrayChoices[randomInt];
  }
  console.log(newPassword);
  return newPassword;
}

function userPrompts() {
  arrayChoices = [];
  passwordLength = prompt("Please choose a number between 8 and 128")
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("please enter an appropriate response")
  } else {
    let hasLower = confirm("Would you like for your password to contain lower case letters?");
    if (hasLower) {
      arrayChoices = arrayChoices.concat(strLower.split(""));
      console.log(arrayChoices);
    }
    let hasUpper = confirm("Would you like for your password to contain upper case letters?");
    if (hasUpper) {
      arrayChoices = arrayChoices.concat(strLower.toUpperCase().split(""));
      console.log(arrayChoices);
    }
    let hasNumber = confirm("Would you like for your password to contain numbers?");
    if (hasNumber) {
      arrayChoices = arrayChoices.concat(strNumber.split(""));
      console.log(arrayChoices);
    }
    let hasSpecial = confirm("Would you like for your password to contain special characters?");
    if (hasSpecial) {
      arrayChoices = arrayChoices.concat(strSpecial.split(""));
      console.log(arrayChoices)
    } else if (!hasLower && !hasUpper && !hasNumber && !hasSpecial) {
      alert("you have not chosen any characters with which to make your password")
    }
  }
}


// stringPractice = "435200afadfak;n;fwken";
// stringPractice2 = "asdfpoaifnffpafoen";

 //function splitString() {
// console.log(stringPractice.split("").concat(stringPractice2.split("")));
//  }

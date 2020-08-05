let strLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let strUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let strNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let strSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "]", "[", "{", "}", "?", ">", "/"]
let arrayChoices = "";
let passwordLength = 8;


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let newPassword;
  for (let i = 0; i < passwordLength; i++) {

  }
}

function userPrompts() {
  arrayChoices = "";
  passwordLength = prompt("Please choose a number between 8 and 128")
  let hasLower = confirm("Would you like for your password to contain lower case letters?");
    if (hasLower) {
    }
let hasUpper = confirm("Would you like for your password to contain upper case letters?");
 if (hasUpper){

 }
 let hasNumber = confirm("Would you like for your password to contain numbers?");
   if (hasNumber) {

   }
   let hasSpecial = confirm("Would you like for your password to contain special characters?");
   if (hasSpecial) {

   }
 }


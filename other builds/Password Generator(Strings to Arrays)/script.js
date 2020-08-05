let strLower = "abcdefghijklmnopqrstuvwxyz".split("");
let strUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let strNumber = "0123456789".split("")
let strSpecial = "!@#$%^&*()~][{}?>/".split("");
let arrayChoices = [];
let passwordLength = 8;


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let prompts = userPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let newPassword;
  for (let i = 0; i < passwordLength; i++) {
    newPassword = newPassword + arrayChoices(Math.floor(Math.random() * arrayChoices.length));
  }
  return newPassword;
}

function userPrompts() {
  arrayChoices = [];
  passwordLength = prompt("Please choose a number between 8 and 128")
  let hasLower = confirm("Would you like for your password to contain lower case letters?");
    if (hasLower) {
      arrayChoices.concat(strLower);
      console.log(arrayChoices);
    }
let hasUpper = confirm("Would you like for your password to contain upper case letters?");
 if (hasUpper){
   arrayChoices.concat(strUpper);
   console.log(arrayChoices);
 }
 let hasNumber = confirm("Would you like for your password to contain numbers?");
   if (hasNumber) {
arrayChoices.concat(StrLower);
console.log(arrayChoices);
   }
   let hasSpecial = confirm("Would you like for your password to contain special characters?");
   if (hasSpecial) {
     arrayChoices.concat(strSpecial);
     console.log(arrayChoices)
   }
 }


let arrLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let arrUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let arrNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let arrSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "]", "[", "{", "}", "?", ">", "/"]
let strChoices = "";
let passwordLength = 8;


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let runProgram = userPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let newPassword;
  for (let i = 0; i < passwordLength; i++) {
newPassword = newPassword + strChoices.charAt(Math.floor(Math.random() * strChoices.length));
  }
  return newPassword;
}

function userPrompts() {
  strChoices = "";
  passwordLength = prompt("Please choose a number between 8 and 128")
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("please enter an appropriate response")
  } else {
  let hasLower = confirm("Would you like for your password to contain lower case letters?");
    if (hasLower) {
      strChoices = strChoices.concat(arrLower.join(""));
      console.log(strChoices);
    }
let hasUpper = confirm("Would you like for your password to contain upper case letters?");
 if (hasUpper){
   strChoices = strChoices.concat(arrUpper.join(""));
   console.log(strChoices);
 }
 let hasNumber = confirm("Would you like for your password to contain numbers?");
   if (hasNumber) {
     strChoices = strChoices.concat(arrNumber.join(""));
    console.log(strChoices);
   }
   let hasSpecial = confirm("Would you like for your password to contain special characters?");
   if (hasSpecial) {
    strChoices = strChoices.concat(arrSpecial.join(""));
    console.log(strChoices);
   }else if (!hasLower && !hasUpper && !hasNumber && !hasSpecial) {
    alert("you have not chosen any characters with which to make your password")
  }
    // strChoices = strChoices.replace("\"", "").replace(",", "")
 }
}


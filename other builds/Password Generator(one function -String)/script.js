let charString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()~?><}{[]"
let pLength = 8;
let newCharString = "";


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  pLength = prompt("Please choose a password length.\nPasswords must be at least 8 characters long.\nPasswords may not be longer than 128 characters.")
  if (isNaN(pLength)) {
    console.log("need a number") 
     alert("Please choose a numerical value"); 
  } else if (pLength < 8 || pLength > 128) {
    console.log("need a good value");
    alert("You have chosen an insufficient number of charactrers to create a password");
    } else {
      newCharString="";
    let hasLower = confirm("Would you like for your password to contain lower case letters?\nOK button for 'YES'\nCANCEL button for 'NO'");
    let hasUpper = confirm("Would you like for your password to contain upper case lettters?\nOK button for 'YES'\nCANCEL button for 'NO'");
    let hasNumber = confirm("Would you like for your password to contain numbers?\nOK button for 'YES'\nCANCEL button for 'NO'");
    let hasSpecial = confirm("Would you like for your password to contain special characters?\nOK button for 'YES'\nCANCEL button for 'NO'");
    if(hasLower && !hasUpper && !hasNumber && !hasSpecial) {
      newCharString = charString.slice(0,26);
      console.log(newCharString);
    } else if (hasLower && hasUpper && !hasNumber && !hasSpecial){
      newCharString = charString.substring(0, 52);
      console.log(newCharString);
    } else if (hasLower && hasUpper && hasNumber && !hasSpecial) {
      newCharString = charString.substr(0, 62);
      console.log(newCharString);
    } else if (!hasLower && hasUpper && !hasNumber && hasSpecial) {
      newCharString = charString.slice(26, 52).concat(charString.slice(62, 80));
      console.log(newCharString);
    } else if (hasLower && hasUpper && hasNumber && hasSpecial) {
      newCharString = charString;
      console.log(newCharString);
     } else if (hasLower && !hasUpper && hasNumber && !hasSpecial){
      newCharString = charString.substr(0, 26).concat(charString.substr(52,10));
      console.log(newCharString)
     } else if (!hasLower && hasUpper && !hasNumber && !hasSpecial) {
        newCharString = charString.slice(26, 52);
        console.log(newCharString);
     } else if (!hasLower && hasUpper && hasNumber && !hasSpecial) {
      newCharString = charString.substr(26, 36)
      console.log(newCharString);
    } else if (!hasLower && hasUpper && hasNumber && hasSpecial) {
      newCharString = charString.substring(26, 80);
      console.log(newCharString);
    } else if (!hasLower && !hasUpper && hasNumber && !hasSpecial) {
      newCharString = charString.substr(52, 10);
      console.log(newCharString);
    } else if (!hasLower && !hasUpper && hasNumber && hasSpecial) {
      newCharString = charString.slice(52, 80);
      console.log(newCharString);
    } else if (!hasLower && !hasUpper && !hasNumber && hasSpecial) {
      newCharString = charString.substr(62, 18);
      console.log(newCharString);
    } else if (!hasLower && !hasUpper && !hasNumber && !hasSpecial) {
      console.log("Please choose at least one set of characters");
     alert("Please choose a set of characters to include with your password!");
    }
  } 
  var password = generatePassword();
  
  passwordText.value = password;

}
function generatePassword() {
  let newPassword = "";
  for (let i = 0; i < pLength; i++) {
  let randomIndex = Math.floor(Math.random() * newCharString.length);
    newPassword = newPassword + newCharString.charAt(randomIndex);
  }
    return newPassword;
}


// function integer(x){
//  return isInteger(x)
// }
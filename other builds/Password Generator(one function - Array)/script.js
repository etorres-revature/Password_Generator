let charArray = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "~",
  "?",
  ">",
  "<",
  "}",
  "{",
  "[",
  "]",
];
let pLength = 8;
let newArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  pLength = prompt(
    "Please choose a password length.\nPasswords must be at least 8 characters long.\nPasswords may not be longer than 128 characters."
  );
  if (isNaN(pLength)) {
    console.log("need a number");
    alert("Please choose a numerical value");
  } else if (pLength < 8 || pLength > 128) {
    console.log("need a good value");
    alert(
      "You have chosen an insufficient number of charactrers to create a password"
    );
  } else {
    newArray = "";
    let hasLower = confirm(
      "Would you like for your password to contain lower case letters?\nOK button for 'YES'\nCANCEL button for 'NO'"
    );
    let hasUpper = confirm(
      "Would you like for your password to contain upper case lettters?\nOK button for 'YES'\nCANCEL button for 'NO'"
    );
    let hasNumber = confirm(
      "Would you like for your password to contain numbers?\nOK button for 'YES'\nCANCEL button for 'NO'"
    );
    let hasSpecial = confirm(
      "Would you like for your password to contain special characters?\nOK button for 'YES'\nCANCEL button for 'NO'"
    );
    if (hasLower && !hasUpper && !hasNumber && !hasSpecial) {
      newArray = charArray.slice(0, 26);
      console.log(newArray);
    } else if (hasLower && hasUpper && !hasNumber && !hasSpecial) {
      newArray = charArray.slice(0, 52);
      console.log(newArray);
    } else if (hasLower && hasUpper && hasNumber && !hasSpecial) {
      newArray = charArray.slice(0, 62);
      console.log(newArray);
    } else if (!hasLower && hasUpper && !hasNumber && hasSpecial) {
      newArray = charArray.slice(26, 52).concat(charArray.slice(62, 80));
      console.log(newArray);
    } else if (hasLower && hasUpper && hasNumber && hasSpecial) {
      newArray = charArray;
      console.log(newArray);
    } else if (hasLower && !hasUpper && hasNumber && !hasSpecial) {
      newArray = charArray.slice(0, 26).concat(charArray.slice(52, 62));
      console.log(newArray);
    } else if (!hasLower && hasUpper && !hasNumber && !hasSpecial) {
      newArray = charArray.slice(26, 52);
      console.log(newArray);
    } else if (!hasLower && hasUpper && hasNumber && !hasSpecial) {
      newArray = charArray.slice(26, 62);
      console.log(newArray);
    } else if (!hasLower && hasUpper && hasNumber && hasSpecial) {
      newArray = charArray.slice(26, 80);
      console.log(newArray);
    } else if (!hasLower && !hasUpper && hasNumber && !hasSpecial) {
      newArray = charArray.slice(52, 62);
      console.log(newArray);
    } else if (!hasLower && !hasUpper && hasNumber && hasSpecial) {
      newArray = charArray.slice(52);
      console.log(newArray);
    } else if (!hasLower && !hasUpper && !hasNumber && hasSpecial) {
      newArray = charArray.slice(62);
      console.log(newArray);
    } else if (!hasLower && !hasUpper && !hasNumber && !hasSpecial) {
      console.log("Please choose at least one set of characters");
      alert("Please choose a set of characters to include with your password!");
    }
  }
  var password = generatePassword();
  console.log(password);

  passwordText.value = password;
}
function generatePassword() {
  let newPassword = "";
  for (let i = 0; i < pLength; i++) {
    let randomIndex = Math.floor(Math.random() * newArray.length);
    newPassword = newPassword + newArray[randomIndex];
  }
  console.log(newPassword);
  return newPassword;
}

// function integer(x){
//  return isInteger(x)
// }

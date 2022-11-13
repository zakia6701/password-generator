// Assignment Code
var generateBtn = document.querySelector("#generate");

//1.prompt the user for the password criteria
// a.password lenght 8 < 128
// b. lowercase, uppercase special characters
//2. valaidate the input
//3.generate password based on criteria
//4.display the password on the page

function generatePassword() {
  var userInput = window.prompt("How long do you want the password?");
  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("Please enter a integer!");
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please choose a integer between 8 and 128.");
    return;
  }

  var userNum = window.confirm("Do you want numbers in your password?");
  var userLow = window.confirm(
    "Do you want lowercase letters in your password?"
  );
  var userUpp = window.confirm(
    "Do you want uppercase letters in your password?"
  );
  var userSym = window.confirm("Do you want symbols in your password?");

  var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var symList = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '?', '>', '/', '{','<', '+', '=',':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var  listCart = []

// validating the users input
  if (userNum) {
    listCart.push(numList);
  } else {
    alert("Password will NOT contain Numbers.");
  }

  if (userLow) {
    listCart.push(lowList);
  } else {
    alert("Password will NOT contain Lowercase letters.");
  }

  if (userUpp) {
    listCart.push(uppList);
  } else {
    alert("Password will NOT contain Uppercase letters");
  }

  if (userSym) {
    listCart.push(symList);
  } else {
    alert("Password will NOT contain Symbols.");
  }
//prompting the user to select criteria
  if (
    userNum === false &&
    userLow === false &&
    userUpp === false &&
    userSym === false
  ) {
    return "Please Select One of The Character Criteria.";
  }
// selecting the users imput
  if (userNum) {
    listCart = listCart.concat(userNum);
  }
  if (userLow) {
    listCart = listCart.concat(userLow);
  }
  if (userUpp) {
    listCart = listCart.concat(userUpp);
  }
  if (userSym) {
    listCart = listCart.concat(userSym);
  }
//
  let finalPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    let rng = Math.floor(Math.random() * listCart.length);
    // generated password final & rng
    finalPassword = listCart[rng] + finalPassword;
  }
  return finalPassword;
}

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

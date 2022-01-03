// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//create array of letters
let lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbers = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,0 ]
let spChar = ["!", "#", "$", "%", "&", "*", "+", "-", "<", ">", "@", "~", "_", "^"]
//generate password
//return a final password as string
function generatePassword() {

let pwChoice = []
let pLength = prompt("how long do you want your password? (8-128 characters)");
if (pLength<8 || pLength>128) {
  alert("not within range");
  return null;
} else {
  let pCapital = confirm("Would you like any capital letters?");
  let pLCase = confirm("would you like any lower case letters?");
  let pNumber = confirm("would you like any numbers?")
  let pChar = confirm("would you like any special characters?")

}



let password = [];
// create password with that length
//loop through array of letters
for (let i =0; i<pLength; i++) {
  password.push(lcLetters[i]);

}
// push each letter array into password array
//create random 10 letter password
//ask user for length

//convert back to a string
  return password.join("");
}

// Add event listener to generate button
//kick of generator
generateBtn.addEventListener("click", writePassword);

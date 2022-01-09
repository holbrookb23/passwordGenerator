// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//arrays of different character types
let pwChoice = [];
let lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9" ,"0" ];
let spChars = ["!", "#", "$", "%", "&", "*", "+", "-", "<", ">", "@", "~", "_", "^"];

//function to generate password
function generatePassword() {
  //blank array for password choice
  let password = [];
  //determines password length and checks if its in range
  let pLength = parseInt(prompt("how long do you want your password? (8-128 characters)"));
  if(pLength<8 || pLength>128) {
    alert("not within range");
    return null;
  }
  //asks questions to determine which characters to use
  let pCapital = confirm("Would you like any capital letters?");

  let pLCase = confirm("would you like any lower case letters?");

  let pNumber = confirm("would you like any numbers?");

  let pChar = confirm("would you like any special characters?");

  if (!pCapital && !pLCase && !pNumber && !pChar) {
    alert("There must be at least one selection");
    return null;
  }

  //joins the selected characters into separate array
  //Makes sure at least one of each choice is present in password
  if(pCapital === true) {
    pwChoice = pwChoice.concat(capLetters);
    password.push(randomize(capLetters));
    pLength--;
  }

  if(pLCase === true) {
    pwChoice = pwChoice.concat(lcLetters);
    password.push(randomize(lcLetters));
    pLength--;
  }
  
  if(pNumber === true) {
    pwChoice = pwChoice.concat(numbers);
    password.push(randomize(numbers));
    pLength--;
  }
  
  if(pChar === true) {
    pwChoice = pwChoice.concat(spChars);
    password.push(randomize(spChars));
    pLength--;
  }

  //loops through array to pull characters for generated password
  for (let i =0; i<pLength; i++) {
   password.push(randomize(pwChoice));
  }

  //convert back to a string
  return password.join("");
}
//function to make character choices random
function randomize(characters) {
  let random = Math.floor(Math.random() * characters.length);
  return character = characters[random];
}

// Add event listener to generate button
//kick off generator
generateBtn.addEventListener("click", writePassword);

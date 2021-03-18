// Assignment Code
const generateBtn = document.getElementById("generate");

function generatePassword(passwordLength, charPref){
  
  const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] ;

  const specialCharacters = ['?', '!', '@', '#', '$', '&', '%']

  let charArray = [];

  let pwArray = [];

  let passLen = passwordLength;
  let characterPreference = charPref;
  // console.log("Password length is: " + passwordLength);
  // console.log("Accept lowercase: " + characterPreference);

  if (charPref.acceptLowercase) {
    charArray = charArray.concat(lowercaseLetters);
  }

  if (charPref.acceptUppercase) {
    charArray = charArray.concat(uppercaseLetters);
  }

  if (charPref.acceptNumbers) {
    charArray = charArray.concat(numbers);
  }

  if (charPref.acceptSpecialCharacters) {
    charArray = charArray.concat(specialCharacters);
  }

  for (i=0; i < passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * charArray.length);
    
    let randomChar = charArray[randomNum];

    pwArray.push(randomChar);

    console.log(pwArray);
  }
  
  let generatedPassword = pwArray.join("");

  console.log(generatedPassword);
  
    return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  let passwordLength = prompt("How many characters would you like your password to be?");

  let charPref = {
    acceptLowercase: false,
    acceptUppercase: false,
    acceptNumbers: false,
    acceptSpecialCharacters: false,
  }

  // Check to make sure the password length is valid
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Password must be between 8 and 128 characters.");
    return 0;
  } //TODO: Create elseif statement to check for non-numeric answers

  let acceptLowercase = confirm("Would you like your password to contain lowercase letters? \n \n Cancel = No \n Ok =  Yes");

  if (acceptLowercase){
    charPref.acceptLowercase = true;
  }

  let acceptUppercase = confirm("Would you like your password to contain uppercase letters? \n \n Cancel = No \n Ok =  Yes");

  if (acceptUppercase){
    charPref.acceptUppercase = true;
  }

  let acceptNumbers = confirm("Would you like your password to contain numbers? \n \n Cancel = No \n Ok =  Yes");

  if (acceptNumbers){
    charPref.acceptNumbers = true;
  }

  let acceptSpecialCharacters = confirm("Would you like your password to contain special characters? EG: ! ? * & \n \n Cancel = No \n Ok =  Yes");

  if (acceptSpecialCharacters){
    charPref.acceptSpecialCharacters = true;
  }

  // Check to make sure atleast one of the character types is true.
  if (!acceptLowercase && !acceptNumbers && !acceptSpecialCharacters && !acceptUppercase) {
    alert("You must choose atleast one character type");
    return 0;
  }

  let password = generatePassword(passwordLength, charPref);

  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// How do I generate a random password?

// I need to create a few arrays

// An array for lowercase letters
// const lowercaseLetters = ['a', 'b', 'c', 'd']

// An array for uppercase letters
// const uppercaseLetters = ['A', 'B', 'C', 'D']

// An array for numbers
// const numbers = ['1', '2', '3', '4'] 

// An array for special characters 
// const specialCharacters = ['?', '!', '@', '#', '$']

// I'll then need to create a new combined array (characters) that contains all of the characters the user has indicated that want in the password

// I'll then create a for loop that is as long as passwordLength

// Each loop through the loop will need to generate a random number (using math.floor.math(random) * length of the characters array) and use that number to index into the array to grab a character.

// That character will be added to an array (passwordArray)

// I'll then conver that passwordArray to a single string passwordArray.join("")


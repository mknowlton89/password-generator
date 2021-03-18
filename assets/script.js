// Assignment Code
const generateBtn = document.getElementById("generate");

function generatePassword(){
  let generatedPassword = "xYz123";
    return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  let passwordLength = prompt("How many characters would you like your password to be?");

  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Password must be between 8 and 128 characters.");
    return 0;
  } //TODO: Create elseif statement to check for non-numeric answers

  let acceptLowercase = confirm("Would you like your password to contain lowercase letters? \n \n Cancel = No \n Ok =  Yes");

  let acceptUppercase = confirm("Would you like your password to contain uppercase letters? \n \n Cancel = No \n Ok =  Yes");

  let acceptNumbers = confirm("Would you like your password to contain numbers? \n \n Cancel = No \n Ok =  Yes");

  let acceptSpecialCharacters = confirm("Would you like your password to contain special characters? EG: ! ? * & \n \n Cancel = No \n Ok =  Yes");

  if (!acceptLowercase && !acceptNumbers && !acceptSpecialCharacters && !acceptUppercase) {
    alert("You must choose atleast one character type");
    return 0;
  }

  let password = generatePassword();

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

// I'll need to create a for loop that 

// I'll need to use math.floor.math.random to generate a random number and use that number to index into one of the arrays and select a character.

// I'll need to add that character to the generatedPassword variable

// I'll need to do this until the length of characters === passwordLength


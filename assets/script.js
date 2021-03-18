// Assignment Code
let generateBtn = document.getElementById("generate");

function generatePassword(){
  //TODO: 
}

// Write password to the #password input
function writePassword() {
  let passwordLength = prompt("How many characters would you like your password to be?");

  console.log(passwordLength);

  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Password must be between 8 and 128 characters.");
    return 0;
  }

  let acceptLowercase = confirm("Would you like your password to contain lowercase letters? \n \n Cancel = No \n Ok =  Yes");

  let acceptUppercase = confirm("Would you like your password to contain uppercase letters? \n \n Cancel = No \n Ok =  Yes");

  let acceptSpecialCharacters = confirm("Would you like your password to contain special characters? EG: ! ? * & \n \n Cancel = No \n Ok =  Yes");

  // let password = generatePassword();
  // let passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


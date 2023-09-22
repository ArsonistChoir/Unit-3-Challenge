// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
 var userInput = getCriteria()
}

function getCriteria(){
  var passwordLength = prompt("How long do you want password to be?");
  if (passwordLength <= 7 || passwordLength >= 129){
  alert("Password must be 8 to 128 letters long. Please try again.")
return null};
  
var hasLowercase = confirm("Do you want lowercase?");
var hasUppercase = confirm("Do you want uppercase?");
var hasNumber = confirm("Do you want numbers?");
var hasSpecial = confirm("Do you want special characters?");

if (hasLowercase === false && hasUppercase === false && hasNumber === false && hasSpecial === false){
  alert("Please pick one element.")
  return null
}


var userchoice = {
 passwordLength: passwordLength, 
 hasLowercase: hasLowercase,
 hasUppercase: hasUppercase,
 hasNumber: hasNumber,
 hasSpecial: hasSpecial,
}


console.log(userchoice)
return userchoice

}  

var password = ""
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var number = [1,2,3,4,5,6,7,8,9,0]
var special = ["!","@","#","$","%","^","&","*","(",")",]


// create a function to take in all the password criteria
  //prompt user for length of password and save it as a variable
  //check to make sure the length is between 8 and 128 characters
  //confirm lowercase, uppercase numeric, and special characters
  //validate that one of the 4 options were selected 
  //create an object to store the user input

//create a separate global array for each of the 4 confirmations

//inside generatePassword function 
  //create a variable to store user input from the password option function 
  //create a new array that will take in all possible characters that can be used for new password
  //create conditional statements to push into possible character array....ie if the user selected lower case then we need to push those elements in the lowercase array into possible character array. 
  //loop through the possible character array and return characters based on the length given by user
  //return the result and pass to be generated on the page 

  //need to assure that the newly created password has at least 1 character for each of the criteria selected.
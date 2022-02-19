document.getElementById('generate').addEventListener('click', () => {
  passReqs();
  generatePw();
})

//boolean for password conditions
let pwChars;
let isLowercase;
let isUppercase;
let isNumeric;
let isSpecialchar;
let conditionsMet = 0; //number of conditions that are true

const passReqs = () => {
  //asks users for the password conditions
  pwChars = parseInt(prompt("How many characters do you want in your password (8-128 chars limit)?"));
  isLowercase = confirm("Do you want lowercase characters?")
  isUppercase = confirm("Do you want uppercase characters?")
  isNumeric = confirm("Do you want numbers?")
  isSpecialchar = confirm("Do you want special characters?")

  //ensures user chooses at least one character type; if not, will prompt them to try again from the beginning
  if (!isLowercase && !isUppercase && !isNumeric && !isSpecialchar) {
    alert("Need at least one character type. Try again!");
    passReqs();
  }


  //trying to determine how many conditions are true
  let arrayCond = [isLowercase, isUppercase, isSpecialchar, isNumeric];
  for (let i = 0; i < arrayCond.length; i++) {
    if (arrayCond[i] === true) {
      conditionsMet++;
    }
  }

}





//declaring variables for possible values for each character type
let randomNum = '0123456789'
let randomLower = 'abcdefghijklmnopqrstuvwxyz'
let randomUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let randomSpecial = '!@#$%&*>'
let randomAll = '';


//for the first ones, i'm going to make sure they have basic minimum; and for the rest, i'm going to combine allthe possibles into one random inclusive string to geenrate random

//first i need to see how many are true so that i can subtract from the password length and will generate random ones for the rest


let myPassword = '';
let generatePw = () => {

  //these if statements make sure the minimum requiremnt is met within the first characters of the password
  //also, if the conditions are true, then it adds the true strings onto the 'randomAll' variable, which will be later used to randomly generate teh rest of the characters of the password 

  if (isNumeric) {
    myPassword += randomNum.charAt(Math.floor(Math.random() * randomNum.length));
    randomAll += randomNum;
  }
  if (isLowercase) {
    myPassword += randomLower.charAt(Math.floor(Math.random() * randomLower.length));
    randomAll += randomLower;
  }
  if (isUppercase) {
    myPassword += randomUpper.charAt(Math.floor(Math.random() * randomUpper.length));
    randomAll += randomUpper;
  }
  if (isSpecialchar) {
    myPassword += randomSpecial.charAt(Math.floor(Math.random() * randomSpecial.length));
    randomAll += randomSpecial;
  }


  //randomly adds teh rest of the characters for the password RANDOMLY from the set 'randomAll'
  for (let i = 0; i < pwChars - conditionsMet; i++) {
    myPassword += randomAll.charAt(Math.floor(Math.random() * randomAll.length))
  }



  alert("Your generated password is: " + myPassword)
}
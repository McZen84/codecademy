// ask for username
let userName = "Danny";

// hello message
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// ask user for question
const userQuestion = "Is this a random number";
console.log(`${userName} asked ${userQuestion}`);

// get random number
let randomNumber = Math.floor(Math.random() * 8);

// print out answer based on random number
let text = '';

switch (randomNumber) {
  case 0:
    text = "It is certain";
    break;
  case 1:
    text = "It is certain";
    break;
  case 2:
    text = "It is decidedly so";
    break;
  case 3:
    text = "Reply hazy try again";
    break;
  case 4:
    text = "Cannot predict now";
    break;
  case 5:
    text = "Do not count on it";
    break;
  case 6:
    text = "My sources say no";
    break;
  case 7:
    text = "Outlook not so good";
    break;
  case 8:
    text = "Signs point to yes";
    break;
}

console.log(`Answer: ${text}`)


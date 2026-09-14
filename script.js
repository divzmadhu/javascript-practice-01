// let age = 18;
let age = 15;


// Example Simple if statement
 
// if (age >= 18) {
//   console.log("You are eligible to vote.");
// }
// console.log('done');

// Example if else statement

// if (age >= 18) {
//   console.log("You are eligible to vote.");
// } else {
//   console.log("You are not old enough to vote.");
// }

// Example else if Statement 

// let temperature = 25;
 
// if (temperature > 30) {
//   console.log("It's too hot!");
// } else if (temperature < 10) {
//   console.log("It's too cold!");
// } else {
//   console.log("The weather is just right.");
// }

// Example switch, break, and continue Statement 

let choice = prompt("Choose an option: 1. Start 2. Settings 3. Exit");
 
switch (choice) {
  case '1':
    console.log("Starting the game...");
    break;
  case '2':
    console.log("Opening settings...");
    break;
  case '3':
    console.log("Exiting the game...");
    break;
  default:
    console.log("Invalid option, please try again.");
}
// let age = 18;
let age = 15;


// 1. Example Simple if statement
 
// if (age >= 18) {
//   console.log("You are eligible to vote.");
// }
// console.log('done');

// 2. Example if else statement

// if (age >= 18) {
//   console.log("You are eligible to vote.");
// } else {
//   console.log("You are not old enough to vote.");
// }

// 3. Example else if Statement 

// let temperature = 25;
 
// if (temperature > 30) {
//   console.log("It's too hot!");
// } else if (temperature < 10) {
//   console.log("It's too cold!");
// } else {
//   console.log("The weather is just right.");
// }

// 4. Example switch, break, and continue Statement 

// let choice = prompt("Choose an option: 1. Start 2. Settings 3. Exit");
 
// switch (choice) {
//   case '1':
//     console.log("Starting the game...");
//     break;
//   case '2':
//     console.log("Opening settings...");
//     break;
//   case '3':
//     console.log("Exiting the game...");
//     break;
//   default:
//     console.log("Invalid option, please try again.");
// }

// 5. Example Using if...else instead of switch, break, and continue Statement 

// let choice = prompt("Choose an option: 1. Start 2. Settings 3. Exit");
 
// if (choice === '1') {
//   console.log("Starting the game...");
// } else if (choice === '2') {
//   console.log("Opening settings...");
// } else if (choice === '3') {
//   console.log("Exiting the game...");
// } else {
//   console.log("Invalid option, please try again.");
// }

// 6. Example break Statement:- Breaking Out of a Loop

// let numbers = [1, 2, 3, 4, 5];
 
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 3) {
//     console.log("Found 3! Exiting the loop.");
//     break;  // Exit the loop when 3 is found
//   }
//   console.log(numbers[i]);
// }


// 7. Example: Continue :- Skipping Certain Values with continue

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 === 0) continue;  // Skip even numbers
//   console.log(i);  // Only odd numbers will be printed
// }

// Logical Operators
// 8. Example: AND Operator (&&) :

let isLoggedIn = true;
let isAdmin = true;
 
if (isLoggedIn && isAdmin) {
  console.log("Welcome, admin.");
}





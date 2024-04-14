#! /usr/bin/env node

import inquirer from "inquirer"

console.log("\n\t Wellcome To \'Number Guessing Game\'\n");

// math.floor is use for round of number
const randomnumber = Math.floor(Math.random() * 5 +1);

// Asking Questions from Users
const user_input = await inquirer.prompt([  
    {
        name: "userGussedNumber",
        message: "Please Enter your Guess Number (Number Limit from 1 to 5): ",
        type: "number",
    },
]);

if(user_input.userGussedNumber === randomnumber){
    console.log("Congratulation ! You guess a correct number.");
}
else{
    console.log("Sorry, you guess a wrong number");
}
#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWellcome TO \'Simple_Calculator\'\n");
// Asking Questions from Users through inquirer
let calculator = await inquirer.prompt([
    { message: "Please Enter your First Number:", type: "number", name: "firstNumber" },
    { message: "Please Enter your Second Number:", type: "number", name: "secondNumber" },
    {
        name: "operator",
        message: "Select one Operator to perform Operations:",
        type: "list",
        choices: ["Divison", "Multiplication", "Addition", "Subtraction"],
    },
]);
// Condational statements
if (calculator.operator === "Divison") {
    console.log(calculator.firstNumber / calculator.secondNumber);
}
else if (calculator.operator === "Multiplication") {
    console.log(calculator.firstNumber * calculator.secondNumber);
}
else if (calculator.operator === "Addition") {
    console.log(calculator.firstNumber + calculator.secondNumber);
}
else if (calculator.operator === "Subtraction") {
    console.log(calculator.firstNumber - calculator.secondNumber);
}
else {
    console.log("Invalid Input");
}

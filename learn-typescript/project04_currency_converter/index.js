import inquirer from "inquirer";
import chalk from "chalk";
// Definne the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1, // United state dollar
    "EUR": 0.93, // European Currency
    "JYP": 156.79, // Japenese Dollar
    "CAD": 1.37, // Canadian Dollar
    "AUD": 1.53, // Australian Dollar
    "PKR": 278.43, // Pakistani Rupees
};
// print welcome message
console.log(chalk.blue.bold("\n\t Wellcome To \'Currency Converter Application\'\n"));
// Asking Questions from Users to select currencies to convert
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        message: chalk.yellow("Please select the currency convert from: "),
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        message: chalk.yellow("Please select the currency convert into: "),
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        message: chalk.yellow("Please enter the amount to convert: "),
        type: "input",
    }
]);
// Currency conversion formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);

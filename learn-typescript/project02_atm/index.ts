#! /user/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";


// initialize user balance and pin code
let myBalance = 10000;
let myPin = 12345;

// print welcome message
console.log(chalk.blue("\n\t Wellcome To \'ATM Machine\'\n"));

// Asking Questions from Users
let pinAnswer = await inquirer.prompt([  
    {
        name: "pin",
        message: chalk.yellow("Please Enter your Pin Code: "),
        type: "number",
    },
]);

// if pin code correct then move forward otherwise login failed
if (pinAnswer.pin === myPin){
    console.log(chalk.green("\nPin is Correct!, Login Successfully!\n"));
    //console.log(`Your Current Balance is ${myBalance}`)

    // Select an operation
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])

    // for withdraw opreation
    if(operationAns.operation === "Withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
            {
                name: "WithdrawMethod",
                type: "list",
                message: "Please Select a Withdraw method: ",
                choices: ["Fast Cash" , "Enter Amount"]
            }
        ])
        if(withdrawAns.WithdrawMethod === "Fast Cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Please Select your Amount: ",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ])
            if(fastCashAns.fastCash > myBalance){
                console.log(chalk.red("Insufficient Balance"));
            }
            else{myBalance -= fastCashAns.fastCash
                console.log(`${fastCashAns.fastCash} Withdraw Sucessfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
            }
        else if(withdrawAns.WithdrawMethod === "Enter Amount"){
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Please Enter the amount to Withdraw: "
                }
            ])
            if(amountAns.amount > myBalance){
                console.log(chalk.red("Insufficient Balance"));
            }
            else{
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Sucessfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
    }
    // for balance check opreation
    else if(operationAns.operation === "Check Balance"){
        console.log(`Your Remaining Balance is: ${myBalance}`);
    }  
}

// if pin code incorrect login failed
else{
    console.log(chalk.red("Sorry, you Pin is incorrect, Please Try Again!"));
}
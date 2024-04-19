import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
// print welcome message
console.log(chalk.blue.bold("\n\t Wellcome To \'Todo-List Application\'\n"));
// Asking Questions from Users
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            message: chalk.yellow("Please Enter your New Task: "),
            type: "input",
        }
    ]);
    // push method use for add a value in array
    todoList.push(addTask.task);
    console.log('${addTask.task} Task added in Todo-List successfully');
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            message: chalk.yellow("Do you want to add more task ? "),
            type: "confirm",
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your updted Todo-list:", todoList);

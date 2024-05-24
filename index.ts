#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.italic.blue.underline("\n\t\ Welcome to Adventure Quiz Game\n"))

let quiz = await inquirer.prompt([
    {
        name: "myname",
        type: "string",
        message: "Enter your name"
    }
]);

let points = 0

// Question 1

let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "What is typescript:",
        type: "list",
        choices: [
            "A superset of javaScript",
            "A statically typed lnguage that compile to plane javaScript",
            "A programming language Developed by Microsoft", 
            "All of the Above"
        ]
    }
]);

if (question1.one == "All of the Above"){
    console.log("your answer is correct")
    points++
} else {
    console.log("incorrect answer")
}

// Question 2

let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "What command complies TypeScript files in a project:",
        type: "list",
        choices: [
            "tsc",
            "compile",
            "ts-compile",
            "typescript"
        ]
    }
]);

if (question2.two == "tsc"){
    console.log("your answer is correct")
    points++
} else {
    console.log("incorrect answer")
}

// Question 3

let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "What is the purpose of using TypeScript over JavaScript :",
        type: "list",
        choices: [
            "to make code execution faster",
            "to enforce Static Typing and catch error at compile time",
            "to enable access to browser specific APIs",
            "to reduce the need for testing"
        ]
    }
]);

if (question3.three == "to enforce Static Typing and catch error at compile time"){
    console.log("your answer is correct")
    points++
} else {
    console.log("incorrect answer")
}

// Question 4 

let question4 = await inquirer.prompt([
    {
        name: "four",
        message:"Which keyword is used to export elements from a module :",      
        type: "list",
        choices: [
             "out",
             "export",
             "external",
             "expose"
        ]
    }
]);

if (question4.four == "export"){
    console.log("your answer is correct")
    points++
} else {
    console.log("incorrect answer")
}

// Question 5

let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "What is the purpose of the Inquirer module in TypeScript application :",
        type: "list",
        choices: [
            "to handle HTTP requests",
            "to create interactive command-line interfaces",
            "to manage dataBase connections",
            "to generate documentation"    
        ]
    }
]);

if (question5.five == "to create interactive command-line interfaces"){
    console.log("your answer is correct")
    points++
} else {
    console.log("incorrect answer")
}

// Output condition
if (points >= 4){
    console.log(chalk.bold.italic.green("Congratulations!"))
    console.log(`Your points: ${points}`)
} else {
    console.log(chalk.bold.italic.red("You loss! Better luck next time"))
    console.log(`Your points: ${points}`)
}
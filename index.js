#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 280,
    EUR: 0.91,
    INR: 74.57,
    GBP: 0.76,
};
let userAnswer = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "PKR", "EUR", "INR", "GBP"],
    },
    {
        name: "To",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "PKR", "EUR", "INR", "GBP"],
    },
    {
        name: "Amount",
        message: "Enter amount",
        type: "number",
    },
]);
let fromAmount = currency[userAnswer.From];
let toAmount = currency[userAnswer.To];
let amount = userAnswer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = (baseAmount * 10 * toAmount * 10) / 10;
console.log(Math.floor(convertedAmount));

#!/usr/bin/env node
import inquirer from 'inquirer';
async function main() {
    const questions = [
        {
            type: 'input',
            name: 'amount',
            message: 'Enter the amount to convert:',
            validate: (value) => !isNaN(parseFloat(value)),
        },
        {
            type: 'list',
            name: 'from',
            message: 'Select the source currency:',
            choices: ['USD', 'EUR', 'GBP'], // Add more currencies as needed
        },
        {
            type: 'list',
            name: 'to',
            message: 'Select the target currency:',
            choices: ['JPY', 'CAD', 'AUD'], // Add more currencies as needed
        },
    ];
    const answers = await inquirer.prompt(questions);
    const { amount, from, to } = answers;
    // You can use an API or a library to get real exchange rates
    // For simplicity, let's assume a fixed conversion rate
    const conversionRate = 1.25; // Example: 1 USD = 1.25 EUR
    const convertedAmount = parseFloat(amount) * conversionRate;
    console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${to}`);
}
main();

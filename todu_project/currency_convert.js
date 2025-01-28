import https from "https";
import readline from "readline";
import chalk from 'chalk';

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const apiKey = '37902195d8e63ba867620a52';
const url = "https://v6.exchangerate-api.com/v6/37902195d8e63ba867620a52/latest/USD";

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2)
}
https.get(url, (response) => {
    let data = "";
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates;

        r1.question("Enter the amount USD :", (amount) => {
            r1.question("Enter the targat currency (e.g.,INR, EUR,NPR): ", (currency) => {
                const rate = rates[currency.toUpperCase()];
                if (rate) {
                    console.log(chalk.blue.bgGreen.bold(`${amount}USD is approximately ${convertCurrency(amount, rate)} ${currency}`))
                } else {
                    console.log("invalid currency");
                }
            })
        });
    })
});
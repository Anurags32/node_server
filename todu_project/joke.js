import https from "https";
import chalk from "chalk"

const getJoke = () => {
    const url = "https://api.api-ninjas.com/v1/jokes";
    https.get(url, (response) => {
        let data = "";
        response.on('data', (chunk) => {
            data += chunk
        });
        console.log(data);
        response.on('end', () => {
            const joke = JSON.parse(data);
            console.log(`here is random ${joke.type} joke`);
            console.log(chalk.red(`${joke.type} joke:`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`))
        });
        response.on('error', (err) => {
            console.log("Error fecthing the joke, ");
        });
    })
}
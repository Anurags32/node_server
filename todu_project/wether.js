import { error } from 'console';
import readline from 'readline/promises';

const apiKey = "2214bc4b6719f88572b17f191c2d6928";
const base_Url = "https://api.openweathermap.org/data/2.5/weather";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getWeather = async (city) => {
    const url = `${base_Url}?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("city not found, plese chek the city name.");
        }
        const weatherData = await response.json();
        console.log('\nWether Information:');
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp}c`);
    } catch (error) {

    }
}
const city = await r1.question('Enter a city name to get its wather:');
await getWeather(city);
r1.close();
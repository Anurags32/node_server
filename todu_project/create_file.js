import readline from "readline";
import fs from "fs";
import { error } from "console";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fliecreation = () => {
    r1.question("Enter File Name : ", (filename) => {
        r1.question("Enter File Content : ", (content) => {
            fs.writeFile(`${filename}.txt`, content, (error) => {
                if (error) {
                    console.log("error writeing the file");
                } else {
                    console.log(`File ${filename}.txt created sussfully`);
                }
            });
        });
    });
}


fliecreation();
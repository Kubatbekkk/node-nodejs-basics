import fs from "fs";
import { stdin } from "process";
import readline from "readline";

const write = async () => {
  // Write your code here
  const fileStream = fs.createWriteStream("./files/fileToWrite.txt", "utf-8");

  stdin.pipe(fileStream).on("error", (err) => console.log(err));

  process.stdin.on("error", (error) =>
    console.error(`An error occurred on stdin: ${error.message}`)
  );

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  rl.on("line", (input) => {
    // Check if Enter key was pressed without any other input
    if (input.trim() === "") {
      console.log("\nDone writing. Exiting now.");
      process.exit(0);
    }
  });
};

await write();

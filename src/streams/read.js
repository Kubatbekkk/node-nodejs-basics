import fs from "fs";

const read = async () => {
  // Write your code here
  if (fs.existsSync("./files/fileToRead.txt")) {
    const fileStream = fs.createReadStream("./files/fileToRead.txt", "utf-8");
    fileStream.pipe(process.stdout);
  } else {
    throw new Error("No such file");
  }
};

await read();

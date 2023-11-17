import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  // Write your code here
  const sourcePath = path.join(__dirname, "files", "fileToRead.txt");

  fs.access(sourcePath, (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      fs.readFile(sourcePath, "utf-8", (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log("data: ", data);
        }
      });
    }
  });
};

await read();

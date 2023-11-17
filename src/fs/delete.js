import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  // Write your code here
  const fileToRemove = path.join(__dirname, "files", "fileToRemove.txt");

  if (!fs.existsSync(fileToRemove)) {
    console.error("FS operation failed.");
  } else {
    fs.unlink(fileToRemove, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("FS operation success");
      }
    });
  }
};

await remove();

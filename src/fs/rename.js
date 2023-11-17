import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  // Write your code here
  const properName = path.join(__dirname, "files", "properFileName.md");

  if (fs.existsSync(properName)) {
    console.error("FS properFileName.md exists");
  } else {
    fs.rename("./files/wrongFileName.txt", properName, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("The file renamed");
      }
    });
  }
};

await rename();

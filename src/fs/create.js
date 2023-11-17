import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const filePath = path.join(__dirname, "files", "fresh.txt");

  fs.access(filePath, (err) => {
    if (!err) {
      throw new Error("FS error");
    } else {
      const content = "I am young and beautiful";
      fs.writeFile(filePath, content, (err) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log("The file is written.");
        }
      });
    }
  });
};

await create();

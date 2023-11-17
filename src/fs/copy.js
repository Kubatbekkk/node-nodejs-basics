import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const sourcePath = path.join(__dirname, "files");
  const destinationPath = path.join(__dirname, "files_copy");

  if (!fs.existsSync(sourcePath) || fs.existsSync(destinationPath)) {
    console.error("FS Error file_copy exists or files doesn't exist");
  } else {
    fs.cp(sourcePath, destinationPath, { recursive: true }, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("FS copy success");
      }
    });
  }
};

await copy();

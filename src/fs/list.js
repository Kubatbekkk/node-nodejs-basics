// import * as fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const list = async () => {
//   // Write your code here
//   const sourceDir = path.join(__dirname, "files");

//   if (!fs.existsSync(sourceDir)) {
//     console.error("FS operation failed");
//   } else {
//     fs.readdir(sourceDir, (err, files) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(files);
//       }
//     });
//   }
// };

// await list();

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const sourceDir = path.join(__dirname, "file");
  try {
    await fs.access(sourceDir);
    console.log(await fs.readdir(sourceDir));
  } catch (error) {
    console.log("error:", error);
  }
};

await list();

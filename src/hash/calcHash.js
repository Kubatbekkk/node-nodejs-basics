import crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
  // Write your code here
  const hash = crypto.createHash("sha256");

  const fileStream = fs.createReadStream("./files/fileToCalculateHashFor.txt");

  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  fileStream.on("end", () => {
    const digest = hash.digest("hex");
    console.log(`SHA-256 hash ${digest}`);
  });

  fileStream.on("error", (err) => {
    console.error(err);
  });
};

await calculateHash();

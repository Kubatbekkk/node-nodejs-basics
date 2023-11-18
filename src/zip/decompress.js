import * as fs from "fs";
import { pipeline as cbPipeline } from "stream";
import { promisify } from "util";
import { createUnzip } from "zlib";
const pipeline = promisify(cbPipeline);

const decompress = async () => {
  // Write your code here
  const unzip = createUnzip();
  const source = fs.createReadStream("./files/archive.gz");
  const destination = fs.createWriteStream("./files/fileToCompress.txt");
  try {
    await pipeline(source, unzip, destination);
  } catch (error) {
    console.error(error);
  }
};

decompress();

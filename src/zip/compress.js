import * as fs from "fs";
import { pipeline as callBackPipeline } from "stream";
import { promisify } from "util";
import zlib from "zlib";
const pipeline = promisify(callBackPipeline);

const compress = async () => {
  // Write your code here
  const gzip = zlib.createGzip();
  const source = fs.createReadStream("./files/fileToCOmpress.txt");
  const destination = fs.createWriteStream("./files/archive.gz");
  try {
    await pipeline(source, gzip, destination);
  } catch (error) {
    console.error(error);
  }
};

compress();

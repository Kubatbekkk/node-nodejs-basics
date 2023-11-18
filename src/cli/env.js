import process from "process";
const parseEnv = () => {
  // Write your code here
  for (const key in process.env) {
    if (key.startsWith("RSS_")) {
      console.log(`${key}=${process.env[key]}`);
    }
  }
  // console.log({ name: process.env.RSS_NAME, age: process.env.RSS_AGE });
  console.log({ process: process }, { memoryUsage: process.memoryUsage() });
};

// process.on("exit", (code) => {
//   console.log(process.pid);
//   console.log("Process exit event with code: ", code);
// });

parseEnv();

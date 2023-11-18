const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i += 2) {
    let propName = args[i].replace("--", "");
    console.log({ propName });
    let value = args[i + 1];
    console.log({ value });
    console.log(`${propName} is ${value}`);
  }
  console.log(args.length, process.argv);
};

parseArgs();

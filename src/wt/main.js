import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
import * as OS from "os";

const performCalculations = async () => {
  // Write your code here
  if (isMainThread) {
    const CPUNumbers = OS.cpus().length;
    let workersCompleted = 0;
    let results = [];

    for (let i = 0; i < CPUNumbers; i++) {
      const worker = new Worker("./worker.js");
      const n = 10 + i;
      worker.postMessage(n);

      worker.on("message", (result) => {
        results[i] = result;
        workersCompleted++;

        if (workersCompleted === CPUNumbers) {
          console.log(results);
        }
      });

      worker.on("error", () => {
        results[i] = { status: "error", data: null };
        workersCompleted++;
      });

      worker.on("exit", (code) => {
        if (code != 0) {
          console.log(`Worker stopped with exit code ${code}`);
        }
      });
    }
  }
};

await performCalculations();

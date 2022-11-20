import child_process from "child_process";

const path = process.argv[1].slice(0, -9);

// Set env var for root directory
process.env.NODE_PATH = path;

// Logger for all data
process.argv.forEach((val, index, array) => {
  console.log("data from terminal: ", val);
});

// Run child process
const forked = child_process.fork("index.js");

// Handle log stream for child process
forked.on("message", (message) => {
  console.log(message);
});

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = path.join(__dirname, "../videos");

const getAllFiles = (req, res, next) => {
  fs.readdir(directoryPath, (error, files) => {
    if (error) {
      return console.log("Unable to scan directory: " + error);
    }

    files.shift();

    res.send(files);
  });
};

export default getAllFiles;

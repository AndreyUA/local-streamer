import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = path.join(__dirname, "../videos");

const stream = (req, res, next) => {
  // TODO: add error handling
  // ! if videoId < 1 && videoId > videoArr.length
  const videoId = +req.params.id + 1;

  const range = req.headers.range;
  const videoArr = [];

  // Scan all video files
  fs.readdir(directoryPath, (error, files) => {
    if (error) {
      return console.log("Unable to scan directory: " + error);
    }

    files.forEach((fileName) => {
      videoArr.push(`./videos/${fileName}`);
    });

    // Set current video
    const currentVideo = videoArr[videoId];

    if (range) {
      const statistics = fs.statSync(currentVideo);
      let [start, end] = range.replace(/bytes=/, "").split("-");
      start = parseInt(start, 10);
      end = end ? parseInt(end, 10) : statistics.size - 1;

      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${statistics.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Content-Type": "video/mp4",
      });

      fs.createReadStream(currentVideo, { start, end }).pipe(res);
    } else {
      res.writeHead(200, {
        "Content-Length": statistics.size,
        "Content-Type": "video/mp4",
      });

      fs.createReadStream(currentVideo).pipe(res);
    }
  });
};

export default stream;

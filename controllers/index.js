import fs from "fs";

const stream = (req, res, next) => {
  const video = "./videos/mk.mp4";
  const statistics = fs.statSync(video);
  const range = req.headers.range;

  if (range) {
    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : statistics.size - 1;

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${statistics.size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Type": "video/mp4",
    });

    fs.createReadStream(video, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": statistics.size,
      "Content-Type": "video/mp4",
    });

    fs.createReadStream(video).pipe(res);
  }
};

export default {
  stream,
};

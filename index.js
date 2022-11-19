import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

import routes from "./routes/index.js";
import getMyLocalIpAddress from "./utils/getMyLocalIpAddress.js";

const PORT = 3000;

const app = express();

// Logger
app.use(morgan("dev"));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable all CORS requests
app.use(cors());

// All routes
app.use("/api", routes);

// Static content for root URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.resolve(__dirname + "/app/dist")));
app.get("/", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "/index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);

  if (process.env.NODE_MODE === "local") {
    const IPv4Port = getMyLocalIpAddress();

    console.log(`\nyour url is: ${IPv4Port}:3000`);
  }
});

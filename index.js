import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import busboy from "connect-busboy";
import cors from "cors";

import routes from "./routes/index.js";

const PORT = 3000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});

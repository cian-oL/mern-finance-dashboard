import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(`${err}, did not connect to database`));

const PORT = process.env.PORT || 9000;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Successful test request" });
});

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});

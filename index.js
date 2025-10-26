import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

import Connection from "./server/database/db.js";
import Route from "./server/routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
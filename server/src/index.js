import "dotenv/config";
import express from "express";
import conn from "../utils/db.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  conn();
  console.log(`server runnung art ${PORT}`);
});

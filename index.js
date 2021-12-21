const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

connectDB();

const users = require('./routes/users')
const transactions = require("./routes/transactions");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use('/api',users)
app.use("/api", transactions);


app.listen(
  PORT,
  console.log(`Server running mode on port ${PORT}`)
);

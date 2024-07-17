const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { calcRouter } = require("./routes/calc.route");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send({msg:"Welcome to the API"});
});

app.use('/api', calcRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Database connected");
    console.log(`Server running on port ${process.env.port}`);
  } catch (error) {
    console.log(error);
  }
});

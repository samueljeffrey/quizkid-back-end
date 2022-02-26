const express = require("express");
const cors = require("cors");
const { connectDB } = require("./setup/database.js");
const app = express();
const dotenv = require("dotenv");
const apiRouter = require("./routers/api-router.js");

dotenv.config({
  path: ".env.development",
});

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.status(200).send({ message: "Connected to API" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

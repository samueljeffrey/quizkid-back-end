const express = require("express");
const cors = require("cors");
const { connectDB } = require("./setup/database.js");
const app = express();
const dotenv = require("dotenv");
const apiRouter = require("./routers/api-router.js");
const errors = require("./errors/errors.js");

dotenv.config({
  path: ".env.development",
});

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Connected to API" });
});

app.use("/api", apiRouter);

// app.all("*", (req, res, next) => {
//   next({
//     status: 404,
//     message: "Route not found",
//   });
// });

// app.use(errors);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

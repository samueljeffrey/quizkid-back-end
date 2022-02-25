const express = require("express");
const cors = require("cors");
const { connectDB } = require("./setup/database.js");
const app = express();
const dotenv = require("dotenv");
const router = require("./routers/api-router.js");
const errors = require("./errors/errors.js");

console.log(process.env.PORT);

dotenv.config({
  path: "./.env",
});

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Connected to MongoDB" });
});

// app.use("/api", router);

// app.all("*", (req, res, next) => {
//   next({
//     status: 404,
//     message: "Route not found",
//   });
// });

app.use(errors);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

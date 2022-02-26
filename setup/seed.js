const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Quiz = require("./schemas/quiz-schema.js");
const mockQuizzes = require("../mockData/mock-quizzes.json");

dotenv.config({
  path: ".env.development",
});

const runSeed = () => {
  console.log("running seed");
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("DB Connection Open");
      return Quiz.deleteMany({})
        .then(() => {
          return Quiz.insertMany(mockQuizzes);
        })
        .then(() => {
          return mongoose.connection.close();
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

runSeed();

module.exports = runSeed;

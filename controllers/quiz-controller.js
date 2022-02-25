const {
  findQuizzes,
  findQuiz,
  updateQuiz,
  insertQuiz,
} = require("../models/quiz-model.js");

exports.getQuizzes = (req, res, next) => {
  console.log("in quizzes controller");
  insertQuiz(req.body)
    .then((response) => {
      console.log("back in controller (success)");
      res.status(201).send({ data: response });
    })
    .catch((err) => {
      console.log("back in controller (failure)");
      res.status(400).send({ message: "failed" });
    });
};

exports.getQuiz = () => {};

exports.postQuiz = () => {};

exports.patchQuiz = () => {};

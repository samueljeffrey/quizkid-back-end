const {
  findQuizzes,
  findQuiz,
  updateQuiz,
  insertQuiz,
} = require("../models/quiz-model.js");

exports.postQuiz = (req, res, next) => {
  console.log("in quizzes controller");
  insertQuiz(req.body)
    .then((response) => {
      console.log("back in controller (success)");
      res.status(201).send({ data: response });
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
};

exports.getQuizzes = (req, res, next) => {};

exports.getQuiz = () => {};

exports.patchQuiz = () => {};

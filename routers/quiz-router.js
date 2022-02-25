const quizRouter = require("express").Router();
const {
  postQuiz,
  getQuizzes,
  getQuiz,
  patchQuiz,
} = require("../controllers/quiz-controller.js");

quizRouter.post("/", postQuiz).get("/", getQuizzes);
quizRouter.get("/:quizId", getQuiz).patch("/:quizId", patchQuiz);

module.exports = quizRouter;

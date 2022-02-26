const quizRouter = require("express").Router();
const {
  postQuiz,
  getQuizzes,
  getQuiz,
  patchQuiz,
} = require("../controllers/quiz-controller.js");

quizRouter
  .post("/", postQuiz)
  .get("/", getQuizzes)
  .all("/", (req, res) => {
    res.status(405).send({ message: "Method not allowed" });
  });
quizRouter
  .get("/:quizId", getQuiz)
  .patch("/:quizId", patchQuiz)
  .all("/:quizId", (req, res) => {
    res.status(405).send({ message: "Method not allowed" });
  });

module.exports = quizRouter;

const apiRouter = require("express").Router();
const quizRouter = require("./quiz-router.js");

apiRouter.use("/quizzes", quizRouter);

apiRouter
  .get("/", (req, res) => {
    res.status(200).send({ message: "Reached API Router" });
  })
  .all("/", (req, res) => {
    res.status(405).send({ message: "Method not allowed" });
  });

module.exports = apiRouter;

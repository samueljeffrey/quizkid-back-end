const apiRouter = require("express").Router();
const quizRouter = require("./quiz-router.js");

apiRouter.get("/", (req, res) => {
  res.status(200).send({ message: "Reached API Router" });
});
apiRouter.use("/quizzes", quizRouter);

module.exports = apiRouter;

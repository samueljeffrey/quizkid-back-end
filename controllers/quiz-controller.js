const {
  findQuizzes,
  findQuiz,
  updateQuiz,
  insertQuiz,
} = require("../models/quiz-model.js");

exports.postQuiz = (req, res, next) => {
  insertQuiz(req.body)
    .then((response) => {
      res.status(201).send({ data: response });
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
};

exports.patchQuiz = (req, res, next) => {
  updateQuiz(req.params.quizId, req.body)
    .then((response) => {
      res.status(200).send({ data: response });
    })
    .catch((err) => {
      if (err === "malformed") {
        res.status(400).send({
          error:
            "Request body must contain keys 'plays' and 'average' with numerical values",
        });
      } else {
        res.status(404).send({ error: "Quiz not found" });
      }
    });
};

exports.getQuiz = (req, res, next) => {
  findQuiz(req.params.quizId)
    .then((response) => {
      res.status(200).send({ data: response });
    })
    .catch((err) => {
      res.status(404).send({ message: "Quiz not found" });
    });
};

exports.getQuizzes = (req, res, next) => {
  findQuizzes(req.query)
    .then((response) => {
      if (!response.length) {
        res.status(404).send({ data: "No quizzes found" });
      } else {
        res.status(200).send({ data: response });
      }
    })
    .catch(() => {
      res.status(400).send({ error: "Query can only be for 'category'" });
    });
};

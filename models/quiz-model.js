const Quiz = require("../setup/schemas/quiz-schema.js");

exports.insertQuiz = (body) => {
  const newQuiz = new Quiz(body);
  return newQuiz
    .save()
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

exports.updateQuiz = () => {};

exports.findQuiz = () => {};

exports.findQuizzes = () => {};

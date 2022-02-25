const Quiz = require("../setup/schemas/quiz-schema.js");

exports.insertQuiz = (body) => {
  console.log("in quizzes model");
  const newQuiz = new Quiz(body);
  return newQuiz
    .save()
    .then((response) => {
      console.log("leaving quizzes model (success)");
      return response;
    })
    .catch((err) => {
      console.log("leaving quizzes model (failure)");
      return err;
    });
};

exports.updateQuiz = () => {};

exports.findQuiz = () => {};

exports.findQuizzes = () => {};

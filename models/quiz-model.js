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

exports.updateQuiz = (id, body) => {
  if (
    !body ||
    typeof body.plays !== "number" ||
    typeof body.average !== "number"
  ) {
    return Promise.reject("malformed");
  }
  return Quiz.findByIdAndUpdate(id, {
    plays: body.plays,
    average: body.average,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

exports.findQuiz = (id) => {
  return Quiz.findById(id)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

exports.findQuizzes = (query) => {
  if (!query.category) {
    return Quiz.find()
      .sort({ created: "descending" })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return Promise.reject();
      });
  }

  return Quiz.find({ category: query.category })
    .sort({ created: "descending" })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return Promise.reject();
    });
};

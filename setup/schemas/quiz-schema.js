const mongoose = require("mongoose");

const QuizSchema = mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    default: mongoose.Types.ObjectId,
  },
  title: { type: String, required: true },
  category: { type: String, required: true },
  creator: { type: String, required: true },
  instructions: [{ type: String }],
  seconds: { type: Number, required: true },
  questions: [
    {
      question: { type: String },
      correct: { type: String },
      accepted: [{ type: String }],
    },
  ],
  created: { type: Date, default: Date.now },
  plays: { type: Number, default: 0 },
  average: { type: Number, default: 0 },
});

module.exports = Quiz = mongoose.model("quizzes", QuizSchema);

const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: Number, // index of correct option
    },
  ],
});

module.exports = mongoose.model('Quiz', quizSchema);
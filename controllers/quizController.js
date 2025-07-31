const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json({ message: 'Quiz created' });
  } catch (err) {
    res.status(400).json({ error: 'Quiz creation failed' });
  }
};

exports.getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
};

exports.getQuizById = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.json(quiz);
};

exports.submitQuiz = async (req, res) => {
  const { answers } = req.body;
  const quiz = await Quiz.findById(req.params.id);

  let score = 0;
  quiz.questions.forEach((q, idx) => {
    if (q.correctAnswer === answers[idx]) score++;
  });
  res.json({ score });
};

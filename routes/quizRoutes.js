const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createQuiz,
  getQuizzes,
  getQuizById,
  submitQuiz,
} = require('../controllers/quizController');

router.post('/', auth, createQuiz);
router.get('/', getQuizzes);
router.get('/:id', getQuizById);
router.post('/:id/submit', submitQuiz);

module.exports = router;
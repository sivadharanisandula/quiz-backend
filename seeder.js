require('dotenv').config();
const mongoose = require('mongoose');
const Quiz = require('./models/Quiz');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/quizapp';

const quizzes = [
  {
    title: 'General Knowledge',
    questions: [
      {
        question: 'What is the capital of France?',
        options: ['Berlin', 'London', 'Paris', 'Madrid'],
        correctAnswer: 2
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
        correctAnswer: 2
      },
      {
        question: 'How many continents are there?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 2
      }
    ]
  },
  {
    title: 'Math Basics',
    questions: [
      {
        question: '2 + 2 = ?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1
      },
      {
        question: '10 * 10 = ?',
        options: ['10', '100', '1000', '10000'],
        correctAnswer: 1
      }
    ]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    await Quiz.deleteMany(); // Optional: clears existing quizzes
    console.log('Old quizzes removed');

    await Quiz.insertMany(quizzes);
    console.log('Sample quizzes inserted!');

    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding DB:', error);
  }
};

seedDB();

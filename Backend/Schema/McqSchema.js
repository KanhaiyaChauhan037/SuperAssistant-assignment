// const mongoose = require("mongoose");

// const mcqSchema = new mongoose.Schema({
//      question: {
//           type: String,
//           required: true,
//      },
//      answers: {
//           type: [String],
//           required: true,
//      },
//      correctAnswer: {
//           type: Number,
//           required: true,
//      },
// });

// const MCQ = mongoose.model("MCQ", mcqSchema);
// module.exports = MCQ;
// models/mcqModel.js

const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
     question: String,
     answers: [String],
     correctAnswer: Number,
});

const Mcq = mongoose.model("Mcq", QuestionSchema);

module.exports = Mcq;

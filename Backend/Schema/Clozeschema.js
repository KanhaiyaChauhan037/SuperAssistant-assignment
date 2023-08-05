
const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
     sentence: String,
     answers: [String],
});

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
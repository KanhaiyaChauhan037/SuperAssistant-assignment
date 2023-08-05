const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
     question: String,
     category: [String],
     item: [String]

});

const Categories = mongoose.model("Category", QuestionSchema);
module.exports = Categories;
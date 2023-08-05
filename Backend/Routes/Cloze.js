const express = require("express");
const router = express.Router();
const Question = require("../Schema/Clozeschema");

router.post("/", async (req, res) => {
     const { sentence, answers } = req.body;

     try {
          const newQuestion = new Question({
               sentence,
               answers,
          });

          const savedQuestion = await newQuestion.save();
          res.status(201).json(savedQuestion);
     } catch (error) {
          res.status(500).json({ error: "Failed to save the question." });
     }
});

// Endpoint for retrieving all questions
router.get("/", async (req, res) => {
     try {
          const questions = await Question.find({});
          res.status(200).json(questions);
     } catch (error) {
          res.status(500).json({ error: "Failed to retrieve questions." });
     }
});

module.exports = router;
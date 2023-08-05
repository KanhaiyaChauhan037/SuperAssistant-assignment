// routes/mcqRoutes.js

const express = require("express");
const router = express.Router();
const Mcq = require("../Schema/McqSchema");

// Endpoint for adding a new MCQ question
router.post("/", async (req, res) => {
     const { question, answers, correctAnswer } = req.body;

     try {
          const newQuestion = new Mcq({
               question,
               answers,
               correctAnswer,
          });

          const savedQuestion = await newQuestion.save();
          res.status(201).json(savedQuestion);
     } catch (error) {
          res.status(500).json({ error: "Failed to save the MCQ question." });
     }
});

// Endpoint for retrieving all MCQ questions
router.get("/", async (req, res) => {
     try {
          const mcqQuestions = await Mcq.find({});
          res.status(200).json(mcqQuestions);
     } catch (error) {
          res.status(500).json({ error: "Failed to retrieve MCQ questions." });
     }
});

module.exports = router;

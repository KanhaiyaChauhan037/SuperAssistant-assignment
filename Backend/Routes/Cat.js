const express = require("express");
const router = express.Router();
const Categories = require("../Schema/Cat.js");

router.post("/", async (req, res) => {
     const { question, category, item } = req.body;

     try {
          const newQuestion = new Categories({
               question,
               category, item
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
          const questions = await Categories.find({});
          res.status(200).json(questions);

     } catch (error) {
          res.status(500).json({ error: "Failed to retrieve questions." });
     }
});

module.exports = router;
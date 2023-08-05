import React, { useState, useEffect } from "react";
import { Box, Text, Button, Input, Flex } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const RenderQuestions = () => {
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    fetch("https://super-lvuk.onrender.com/api/questions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch questions.");
        }
        return response.json();
      })
      .then((data) => {
        setQuestionsAndAnswers(data);
      })
      .catch((error) => {
        setApiError(error.message);
      });
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setUserAnswer("");
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setUserAnswer("");
  };

  const handleUserAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const currentQuestion = questionsAndAnswers[currentQuestionIndex];

  return (
    <Box mt="1rem">
      <Box
        ml="20px"
        borderLeft="5px solid #1598c0"
        borderRadius="10px"
        w="60%"
        p="20px"
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      >
        {apiError ? (
          <Text>Error: {apiError}</Text>
        ) : (
          currentQuestion && (
            <Box key={currentQuestionIndex} mt="10px">
              <Text
                fontSize={"20px"}
                fontWeight={"bold"}
                mb="10px"
                color={"teal"}
              >
                {" "}
                {currentQuestion.answers.join(", ")}
              </Text>
              <Text fontSize={"18px"}>
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  Que{currentQuestionIndex + 1}:-{" "}
                </span>{" "}
                {currentQuestion.answers.reduce(
                  (modifiedSentence, answer) =>
                    modifiedSentence.replace(
                      new RegExp("\\b" + answer + "\\b", "gi"),
                      "____"
                    ),
                  currentQuestion.sentence
                )}
              </Text>
              <Input
                mt="10px"
                placeholder="Type Your answer here..."
                value={userAnswer}
                onChange={handleUserAnswerChange}
              />
            </Box>
          )
        )}
        <Flex gap="10px" mt="10px">
          <Button bg="none">
            <button
              disabled={currentQuestionIndex === 0}
              onClick={handlePreviousQuestion}
              mr="10px"
            >
              <ArrowLeftIcon />
            </button>
          </Button>

          <Button bg="none">
            <button
              disabled={currentQuestionIndex === questionsAndAnswers.length - 1}
              onClick={handleNextQuestion}
            >
              <ArrowRightIcon />
            </button>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default RenderQuestions;

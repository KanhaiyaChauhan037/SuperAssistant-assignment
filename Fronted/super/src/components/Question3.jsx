import {
  Box,
  Button,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Question3 = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("1");
  const toast = useToast();
  const handleSubmit = async () => {
    const data = {
      question,
      answers,
      correctAnswer,
    };

    try {
      const response = await fetch("https://super-lvuk.onrender.com/api/mcq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Question stored successfully!");
        toast({
          title: `Question Created successfully`,
          position: "top",
          status: "success",
          isClosable: "true",
          duration: 2000,
        });
      } else {
        console.error("Failed to store the question.");
      }
    } catch (error) {
      console.error("Error occurred while storing the question:", error);
    }
  };

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
        <Text mb="20px" fontWeight="bold" fontSize="lg">
          Comprehension type Question
        </Text>
        <Box mt="10px">
          <Textarea
            type="text"
            placeholder="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Box>
        <Box mt="10px">
          <RadioGroup onChange={setCorrectAnswer} value={correctAnswer}>
            <Stack direction="column">
              <Input
                type="text"
                placeholder="type correct answer first"
                value={answers[0]}
                onChange={(e) =>
                  setAnswers([
                    e.target.value,
                    answers[1],
                    answers[2],
                    answers[3],
                  ])
                }
                border={"none"}
                borderBottom={"1px solid gray"}
                _focus={{ outline: "none", border: "none" }}
              />
              <Input
                type="text"
                placeholder="answer2"
                value={answers[1]}
                onChange={(e) =>
                  setAnswers([
                    answers[0],
                    e.target.value,
                    answers[2],
                    answers[3],
                  ])
                }
                border={"none"}
                borderBottom={"1px solid gray"}
                _focus={{ outline: "none", border: "none" }}
              />
              <Input
                type="text"
                placeholder="answer3"
                value={answers[2]}
                onChange={(e) =>
                  setAnswers([
                    answers[0],
                    answers[1],
                    e.target.value,
                    answers[3],
                  ])
                }
                border={"none"}
                borderBottom={"1px solid gray"}
                _focus={{ outline: "none", border: "none" }}
              />
              <Input
                type="text"
                placeholder="answer4"
                value={answers[3]}
                onChange={(e) =>
                  setAnswers([
                    answers[0],
                    answers[1],
                    answers[2],
                    e.target.value,
                  ])
                }
                border={"none"}
                borderBottom={"1px solid gray"}
                _focus={{ outline: "none", border: "none" }}
              />
            </Stack>
          </RadioGroup>
        </Box>
        <Box w="20%" m="auto">
          <Button mt="30px" colorScheme="teal" onClick={handleSubmit}>
            Add Question
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Question3;

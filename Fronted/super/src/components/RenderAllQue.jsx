import React, { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox, Flex, Box, Button, Heading, Text } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const RenderAllQue = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 1;
  const [selectedAnswers, setSelectedAnswers] = useState({});
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://super-lvuk.onrender.com/api/mcq"
      );
      const dataa = response.data;
      setData(dataa);
      console.log("mcq3", dataa);
    } catch (error) {
      console.error("Error fetching MCQ data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleCheckboxChange = (questionId, answerIndex) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: answerIndex,
    }));
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = data.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  return (
    <Box
      ml="20px"
      borderLeft="5px solid #1598c0"
      borderRadius="10px"
      w="60%"
      p="20px"
      boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
    >
      <Text mb={4}>Question: {currentPage}</Text>

      <Box>
        {currentQuestions.map((el) => (
          <Box key={el._id} borderWidth="1px" p={4} mb={4} borderRadius="md">
            <p>{el.question}</p>
            <Flex direction="column" mt={2} rowGap={"5px"}>
              {el.answers.map((answer, index) => (
                <Checkbox
                  key={index}
                  isChecked={selectedAnswers[el._id] === index}
                  onChange={() => handleCheckboxChange(el._id, index)}
                >
                  {answer}
                </Checkbox>
              ))}
            </Flex>
          </Box>
        ))}
      </Box>

      <Flex alignItems={"center"} gap="10px" mt={4}>
        <Button bg="none">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <ArrowLeftIcon />
          </button>
        </Button>
        <Button bg="none">
          <button
            onClick={handleNextPage}
            disabled={indexOfLastQuestion >= data.length}
          >
            <ArrowRightIcon />
          </button>
        </Button>
      </Flex>
    </Box>
  );
};

export default RenderAllQue;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Button,Flex } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
const QuestionRender = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 1; // Change this value to control the number of questions per page

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://super-lvuk.onrender.com/api/categories"
      );
      const dataa = response.data;
      setData(dataa);
      console.log("mcq", dataa);
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
      {currentQuestions.map((el) => (
        <Box key={el.id} mb={4} borderWidth="1px" borderRadius="md" p={4}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            <span style={{ fontWeight: "bold" }}> Que{currentPage}: </span>{" "}
            {el.question}
          </Text>
          <Box>
            <Flex alignItems={"center"} gap="10px" fontSize={"18px"} fontFamily={"sans-serif"} fontWeight={"500"} color="teal.900">
              {el.item.map((itemEl, index) => (
                <Text key={index}>{`Item  ${itemEl}`}</Text>
              ))}
            </Flex>
            {el.category.map((categoryEl, index) => (
              <Text key={index}>{`Category ${categoryEl}`}</Text>
            ))}
          </Box>
        </Box>
      ))}
      <Box mt={4}>
        <Button bg="none" mr={2} onClick={handlePrevPage}>
          <button disabled={currentPage === 1}>
            <ArrowLeftIcon />
          </button>
        </Button>
        <Button bg="none" onClick={handleNextPage}>
          <button disabled={indexOfLastQuestion >= data.length}>
            <ArrowRightIcon />
          </button>
        </Button>
      </Box>
    </Box>
  );
};

export default QuestionRender;

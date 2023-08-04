import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  Text,
  Flex,
  Heading,
  Select,
  Button,
} from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";

const FormInput = () => {
  const [categories, setCategories] = useState([""]);
  const [answers, setAnswers] = useState([""]);
  const [selectOptions, setSelectOptions] = useState([]);

  const handleAddCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index + 1, 0, "");
    setCategories(updatedCategories);
  };

  const handleAddAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index + 1, 0, "");
    setAnswers(updatedAnswers);
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleDeleteAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index, 1);
    setAnswers(updatedAnswers);
  };

  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);

    if (value.endsWith("\n")) {
      handleAddCategory(index);
    }
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);

    if (value.endsWith("\n")) {
      handleAddAnswer(index);
    }
  };

  useEffect(() => {
  
    const newSelectOptions = categories.filter(Boolean);
    setSelectOptions(newSelectOptions);
  }, [categories]);

  const handleSubmit = () => {
    const formData = {
      question: "Question 1",
      categories,
      answers,
    };
    console.log(formData);
  };

  return (
    <Box>
      <Box
        ml="20px"
        borderLeft="5px solid #1598c0"
        borderRadius="10px"
        w="60%"
        p="20px"
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      >
        <Box>
          <Heading mb="10px" size="sm">
            Question 1
          </Heading>
          <Input w="30rem" placeholder="enter name" />
        </Box>
        {/* // categories section  */}
        <br />
        <Box>
          <Text fontWeight={"500"} mb="6px">
            Categories
          </Text>
          {categories.map((category, index) => (
            <Box key={index}>
              <Flex alignItems={"center"} gap="12px">
                <Input
                  w="12rem"
                  placeholder="cat1"
                  value={category}
                  mb="8px"
                  onChange={(e) => handleCategoryChange(index, e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddCategory(index);
                    }
                  }}
                />
                {index > 0 && (
                  <Button bg="none" onClick={() => handleDeleteCategory(index)}>
                    <RxCross2 fontSize={"24px"} fontWeight={"500"} />
                  </Button>
                )}
              </Flex>
            </Box>
          ))}
        </Box>

        {/* answer section is here  */}
        <br />
        <Box>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text mb="6px" fontWeight={"500"}>
              Item
            </Text>
            <Text mb="6px" mr="5rem" fontWeight={"500"}>
              Belongs To
            </Text>
          </Flex>
          {answers.map((answer, index) => (
            <Box key={index}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Flex gap="10px" alignItems={"center"}>
                  <Input
                    w="12rem"
                    placeholder="ans1 "
                    mb="8px"
                    value={answer}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddAnswer(index);
                      }
                    }}
                  />
                  <Box>
                    {index > 0 && (
                      <Button
                        bg="none"
                        onClick={() => handleDeleteAnswer(index)}
                      >
                        <RxCross2 fontSize={"24px"} fontWeight={"500"} />
                      </Button>
                    )}
                  </Box>
                </Flex>
                <Box>
                  <Select w="10rem">
                    <option>select cat</option>
                    {selectOptions.map((option, idx) => (
                      <option key={idx}>{option}</option>
                    ))}
                  </Select>
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>

        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  );
};

export default FormInput;

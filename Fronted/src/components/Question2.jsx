import React, { useState } from "react";
import { Box, Flex, Text, Heading, Input, Checkbox } from "@chakra-ui/react";

const Question2 = () => {
  const [preview, setPreview] = useState("");
  const [selectedWords, setSelectedWords] = useState([]);

  const handleWordDoubleClick = (word) => {
    setSelectedWords((prevSelectedWords) => [...prevSelectedWords, word]);
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
        <Heading mb="20px" size="sm">
          Question 2
        </Heading>
        <Box>
          <Text
            fontWeight={"500"}
            fontSize={["md"]}
            mt={"10px"}
            color="#374151"
          >
            Preview *
          </Text>
          <Input
            readOnly
            type="text"
            contentEditable="false"
            placeholder="Preview"
            value={preview}
          />
        </Box>
        <Box>
          <Text
            fontWeight={"500"}
            fontSize={["md"]}
            mt={"10px"}
            color="#374151"
          >
            Sentence
          </Text>
          <Input
            onChange={(e) => setPreview(e.target.value)}
            type="text"
            placeholder="Double click the word here to convert them into blanks"
            onDoubleClick={(e) => {
              const selectedWord = window.getSelection().toString().trim();
              if (selectedWord) {
                handleWordDoubleClick(selectedWord);
              }
            }}
          />
        </Box>
        <Box ml="15px" mt="20px">
          {selectedWords.length === 0 ? (
            <Checkbox>
              <Input placeholder="option 1" />
            </Checkbox>
          ) : (
            selectedWords.map((word, index) => (
              <Box>
                <Checkbox mb="8px" key={index}>
                  <Input value={word} />
                </Checkbox>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Question2;

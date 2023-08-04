import { Box, Heading, Input,textarea, Radio, RadioGroup,Stack, Textarea } from "@chakra-ui/react";
import React from "react";

const Question3 = () => {
       const [value, setValue] = React.useState("1");
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
        <Heading size="sm">Question 3</Heading>
        <Box mt="10px">
          <Textarea type="text" placeholder="question" />
        </Box>
        <Box mt="10px">
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="column">
              <Radio value="1">Option 1</Radio>
              <Radio value="2">Option 2</Radio>
              <Radio value="3">Option 3</Radio>
              <Radio value="4">Option 4</Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Question3;

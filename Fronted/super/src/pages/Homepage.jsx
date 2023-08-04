import React from "react";
import FormInput from "../components/FormInput";
import Question2 from "../components/Question2";
import Question3 from "../components/Question3";
import { Box } from "@chakra-ui/react";
const Homepage = () => {
  return (
    <div>
      <Box padding="20px" border="1px solid red">
        <FormInput />
        <Question2 />
        <Question3/>
      </Box>
    </div>
  );
};

export default Homepage;

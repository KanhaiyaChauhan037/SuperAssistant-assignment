import React from "react";
import FormInput from "../components/FormInput";
import Question2 from "../components/Question2";
import Question3 from "../components/Question3";
import { Box } from "@chakra-ui/react";
import Navbar2 from "./Navbar2";
const Homepage = () => {
  return (
    <div>
      <Navbar2 />
      <Box padding="20px">
        <FormInput />
        <Question2 />
        <Question3 />
      </Box>
    </div>
  );
};

export default Homepage;

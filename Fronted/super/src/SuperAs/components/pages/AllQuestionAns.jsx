import React from "react";
import RenderQuestions from "../components/ClozeQuestion";
import RenderAllQue from "../components/RenderAllQue";
import QuestionRender from "../components/QuestionRender";
import Navbar2 from "./Navbar2";
import { Button, Box } from "@chakra-ui/react";
import AlertD from "../components/alertmodal/Alert"
const QustionAll = () => {
  return (
    <div>
      <Navbar2 />
      <QuestionRender />
      <RenderQuestions />
      <RenderAllQue />
      <br />
      <Box w="30%" m="auto" pb="30px">
        {/* <Button colorScheme="teal">Submit</Button> */}
        <AlertD/>
      </Box>
    </div>
  );
};

export default QustionAll;

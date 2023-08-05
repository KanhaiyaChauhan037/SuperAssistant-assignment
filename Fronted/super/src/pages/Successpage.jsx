import React from "react";
import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Successpage = () => {
  return (
    <Flex mt="10%" gap="15px" alignItems={"center"} justifyContent={"center"}>
      <Box>
        <Image
          w="60px"
          src="https://static.vecteezy.com/system/resources/previews/010/141/413/non_2x/tick-icon-sign-symbol-design-free-png.png"
        />
      </Box>
      <Box >
        <Heading fontSize="30px" fontWeight="bold" mb={4}>
          Test Completed
        </Heading>
        <Text fontSize="14px" color="gray" mt="-15px">
          Congratulations! Your response has been recorded. You may now close
          this tab.
        </Text>
      </Box>
    </Flex>
  );
};

export default Successpage;

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const obj = {
  email: "",
  password: "",
};
export default function Login() {
  const [data, setdata] = useState(obj);
  const { email, password } = data;
  const handlechange = (e) => {
    e.preventDefault();
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleclick = async () => {
    try {
      if (!email || !password) {
        alert("Please enter credentials");
      } else {
        const response = await axios.post(
          "http://localhost:8080/user/login",
          data
        );

        console.log(response.data);
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data.message);
        alert(error.response.data.message);
      } else {
        console.log("error", error.message);
        alert("An error occurred");
      }
    }
  };

  // const handleclick = async () => {
  //   try {
  //     if (!email || !password) {
  //       alert("Please enter credentials");
  //     } else {
  //       const res = await fetch("http://localhost:8080/user/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });

  //       const da = await res.json();

  //       console.log(da);
  //       alert(da.message);
  //     }
  //   } catch (error) {
  //     console.log("error", error.message);
  //     alert(error.message);
  //   }
  // };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handlechange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handlechange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleclick}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
          <Stack textAlign={"center"} mt="20px">
            <Text>
              {" "}
              <Link
                to="/"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Create an account
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle, FcIphone } from "react-icons/fc";
import firebaseConfig from "./firebaseconfig";
import Phoneauth from "./Phoneauth";
import axios from "axios";
const obj = {
  username: "",
  email: "",
  password: "",
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setdata] = useState(obj);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const handlegoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      await firebase.auth().signInWithPopup(provider);
      console.log("Google Sign-in successful!");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const handlePhone = async () => {};
  const { username, email, password } = data;
  const handlechange = (e) => {
    e.preventDefault();
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handlesignup = async () => {
    try {
      if (!username || !email || !password) {
        console.log("enter credentials");
        alert("Please fill all credentials");
      } else {
        const response = await axios.post(
          "http://localhost:8080/user/signup",
          data
        );

        console.log(response);
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
        alert(error.response.data.message);
      } else {
        console.log("error", error.message);
        alert("An error occurred");
      }
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={2} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          w="30vw"
        >
          <Stack spacing={4}>
            <HStack>
              <FormControl id="firstName" isRequired>
                <FormLabel>User Name</FormLabel>
                <Input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handlechange}
                />
              </FormControl>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handlechange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handlechange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handlesignup}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link
                  to="/login"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap="20px"
            mt="20px"
          >
            <FcGoogle
              onClick={handlegoogle}
              fontSize={"30px"}
              cursor={"pointer"}
            />
            {/* <FcIphone
              onClick={handlePhone}
              fontSize={"30px"}
              cursor={"pointer"}
            /> */}
            <Phoneauth />
          </Flex>
        </Box>
      </Stack>
    </Flex>
  );
}

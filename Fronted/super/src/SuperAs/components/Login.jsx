import { Heading, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://super-lvuk.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login Successful:", data);
      toast({
        title: `Login successfully`,
        position: "top",
        status: "success",
        isClosable: "true",
        duration: 2000,
      });
      navigate("/home");
    } catch (error) {
      console.error("Login Failed:", error.message);
      toast({
        title: `Login Failed`,
        position: "top",
        status: "error",
        isClosable: "true",
        duration: 2000,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className=" m-auto mt-20 w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <Heading size="md" textAlign={"center"} mb="15px">
            Login
          </Heading>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>{" "}
          </div>

          <Link to="/">
            <Text
              mt={"20px"}
              textDecoration={"underline"}
              color="blue"
              textAlign={"center"}
              fontSize={"14px"}
            >
              Create an account
            </Text>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;

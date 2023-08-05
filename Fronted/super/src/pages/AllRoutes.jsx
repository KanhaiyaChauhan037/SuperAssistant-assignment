import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../components/Signup";
import Login from "../components/Login";
import AllQuestionAns from "./AllQuestionAns";
import Homepage from "./Homepage";
import Successpage from "./Successpage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/question" element={<AllQuestionAns />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/success" element={<Successpage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

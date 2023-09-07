import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white font-semibold text-xl">
              {" "}
              <Link to="/"> Multi type Question </Link>
            </span>
          </div>
          <div className="ml-4 flex items-center space-x-4">
            <Link
              to="/home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/question"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Questions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;

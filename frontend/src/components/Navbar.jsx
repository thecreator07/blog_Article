import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="text-xl font-bold text-gray-800">
              Help Center
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {/* <a href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Contact
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Support
            </a> */}
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                navigate("/addCard");
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              Add Card
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

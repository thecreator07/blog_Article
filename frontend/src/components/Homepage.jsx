import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SearchCards from "./SearchCards";
import SingleCard from "./SingleCard";
import AddCardDetail from "./AddCardDetail";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<SearchCards />} />
          <Route path="/card/:titleId" element={<SingleCard />} />
          <Route path="/addCard" element={<AddCardDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default Homepage;

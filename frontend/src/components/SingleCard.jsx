import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardDetails } from "../Api/ArticleApi";
import { Button } from "@mui/material";

const SingleCard = () => {
  const { titleId } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const { data } = await CardDetails(titleId);
        setCard(data?.CardDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [titleId]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{card?.title}</h1>
      <p className="text-lg text-gray-600 mb-8">{card?.description}</p>
      <div className="flex justify-end">
        {/* <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out">
          Learn More
        </button> */}
        <Button style={{borderRadius:"12px" ,backgroundColor:"#a9f2f25a"}}>Learn More</Button>
      </div>
    </div>
  );
};

export default SingleCard;

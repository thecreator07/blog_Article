import React, { useState } from "react";
import { AddCard } from "../Api/ArticleApi";
import { useNavigate } from "react-router-dom";

const AddCardDetail = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = { title, description };
      await AddCard(formData);

      // Navigate to the homepage or display a success message
      navigate("/");
    } catch (err) {
      setError("Failed to add the card. Please try again.");
      console.error("Add Card Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto md:w-[35%] my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Add Article
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Card Title"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Card Description"
          className="h-28 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className={`w-full p-3 text-white font-semibold rounded-lg ${
            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-400"
          } transition duration-200 ease-in-out`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Add Card"}
        </button>
      </form>
    </div>
  );
};

export default AddCardDetail;

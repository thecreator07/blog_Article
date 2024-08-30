import React, { useEffect, useState } from "react";
import { SearchCard } from "../Api/ArticleApi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchData } from "../Redux/CardSlice";
import { Link } from "react-router-dom";

const SearchCards = () => {
  const [title, settitle] = useState("");
  const [loading, setLoading] = useState(false);
  const cards = useSelector((state) => state.data);
  const dispatch = useDispatch();

  console.log(cards);
  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      //   formData.append("description", description);
      console.log(formData);

      const { data } = await SearchCard(title);

      dispatch(setSearchData({ cards: data?.result }));

      //   navigate("/");
      // Handle success (show message, redirect, etc.)
    } catch (error) {
      console.error("Add Product Error:", error);
      // Handle error (show error message, reset form, etc.)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className=" ">
      <section className="py-10 flex flex-col items-center gap-5">
        <h1 className="lg:text-6xl md:text-4xl text-3xl  text-center text-black font-medium">
          How can we Help ?{" "}
        </h1>
        <input
          className="bg-gray-50 border sm:w-1/2 w-full text-black border-gray-300  sm:text-sm rounded-lg block  p-2.5"
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          placeholder="Card Title"
          required
        />
        <button
          onClick={handleSubmit}
          //   type="submit"
          className="m-2 w-fit font-semibold p-2.5 bg-blue-400 rounded-lg"
        >
          {loading ? "loading" : "Search"}
        </button>
      </section>
      <section className="max-w-7xl grid grid-cols-2 gap-16 pb-10">
        {cards &&
          cards.map((data, i) => {
            return (
              <>
                <div className="border rounded-xl">
                  <h1
                    key={data._id}
                    className="px-5 pt-3 pb-2 font-bold border-b text-base text-slate-700"
                  >
                    <Link
                      to={`/card/${data._id}`}
                      className="absolute w-full h-full"
                    ></Link>
                    {data.title}
                  </h1>
                  <p className="px-5 pt-2 pb-5 text-base text-slate-600 font-normal">
                    {data.description}
                  </p>
                </div>
              </>
            );
          })}
      </section>
    </div>
  );
};

export default SearchCards;

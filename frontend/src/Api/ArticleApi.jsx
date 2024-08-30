import axios from "axios";
import { API_URI } from "../utils/constant";

export const AddCard = async (formdata) => {
  try {
    const response = await axios.post(`${API_URI}/api/v1/cards`, formdata, {
      headers: {
        "Content-Type": "application/json",
      },
    //   credentials: "include",
    //   withCredentials: true,
    });

    // Handle response data
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const SearchCard = async (query) => {
  try {
    let url = `${API_URI}/api/v1/cards`;
    if (query) {
      url += `?title=${query}`;
    }
    const responce = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return responce.data;
  } catch (error) {
    console.error("Error fetching Cards:", error);
    throw error;
  }
};

export const CardDetails = async (titleId) => {
  try {
    const responce = await axios.get(`${API_URI}/api/v1/cards/${titleId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return responce.data;
  } catch (error) {
    console.error("Error fetching Cards:", error);
    throw error;
  }
};

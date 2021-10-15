import { ADD_RESPONSES, SET_LOADING, RESPONSES_ERROR } from "./types";
import axios from "axios";

// Adds a new set of responses to the database.
export const addResponses = (response) => async (dispatch) => {
  try {
    setLoading();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/responses", response, config);

    dispatch({
      type: ADD_RESPONSES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: RESPONSES_ERROR,
      payload: error.message,
    });
  }
};

// Sets loading to true.
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

import { GET_COLLEGES, DELETE_COLLEGE, ADD_COLLEGE } from "./types";

import axios from "axios";
import { setLoading } from "./loadingActions";

export const getColleges = () => dispatch => {
  dispatch(setLoading());
  axios.get("/api/college").then(res =>
    dispatch({
      type: GET_COLLEGES,
      payload: res.data.message
    })
  );
};

export const addCollege = data => {
  return {
    type: ADD_COLLEGE,
    payload: data
  };
};

export const deleteCollege = id => {
  return {
    type: DELETE_COLLEGE,
    payload: id
  };
};

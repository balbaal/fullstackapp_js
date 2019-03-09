import {
  GET_COLLEGES,
  DELETE_COLLEGE,
  ADD_COLLEGE,
  COLLEGES_LOADING
} from "./types";

import axios from "axios";

export const getColleges = () => dispatch => {
  dispatch(setCollegesLoading());
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

export const setCollegesLoading = () => {
  return {
    type: COLLEGES_LOADING
  };
};

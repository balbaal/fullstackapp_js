import axios from "axios";

import {
  ADD_STUDENT,
  DELETE_STUDENT,
  GET_STUDENTS,
  STUDENTS_LOADING
} from "./types";

export const getStudents = () => dispatch => {
  dispatch(setStudentsLoading());
  axios.get("/api/student").then(res =>
    dispatch({
      type: GET_STUDENTS,
      payload: res.data.message
    })
  );
};

export const deleteStudent = id => {
  return {
    type: DELETE_STUDENT,
    payload: id
  };
};

export const addStudent = data => {
  return {
    type: ADD_STUDENT,
    payload: data
  };
};

export const setStudentsLoading = () => {
  return {
    type: STUDENTS_LOADING
  };
};

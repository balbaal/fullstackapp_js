import axios from "axios";
import { ADD_STUDENT, DELETE_STUDENT, GET_STUDENTS } from "./types";
import { setLoading } from "./loadingActions";

export const getStudents = () => dispatch => {
  dispatch(setLoading());
  axios.get("/api/student").then(res =>
    dispatch({
      type: GET_STUDENTS,
      payload: res.data.message
    })
  );
};

export const deleteStudent = id => dispatch => {
  axios.delete(`/api/student/${id}`).then(res =>
    dispatch({
      type: DELETE_STUDENT,
      payload: id
    })
  );
};

export const addStudent = data => dispatch => {
  axios.post("/api/student", data).then(res =>
    dispatch({
      type: ADD_STUDENT,
      payload: res.data.message
    })
  );
};

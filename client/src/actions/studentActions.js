import { ADD_STUDENT, DELETE_STUDENT, GET_STUDENTS } from "./types";

export const getStudents = () => {
  return {
    type: GET_STUDENTS
  };
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

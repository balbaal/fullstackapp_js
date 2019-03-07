import { ADD_STUDENT, DELETE_STUDENT, GET_STUDENTS } from "./types";

export const getStudents = () => {
  return {
    type: GET_STUDENTS
  };
};